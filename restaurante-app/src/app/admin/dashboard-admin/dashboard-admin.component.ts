import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AlertService } from "../../shared/services/alert.service";
import { DashboardService } from "../dashboard-admin/dashboard.service";
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
//import 'rxjs/operators';
//import { Map } from 'rxjs/operators';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']

})
export class DashboardAdminComponent implements OnInit {

  existencias:any[];
	selectedDate:String;
	datos:any[][];
  fecha:Date;
  date1 = new Date();
  horas:any[];
  cantidades:any[];
  chart:BaseChartDirective;
  public lineChartData: ChartDataSets[] = //this.datos[0][];
  [
   /* { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },*/
    { data: [0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0], label: 'Ventas del día' }
  ];
  public lineChartLabels: Label[] = ['00', '01', '02', '03', '04', '05', '06',
                                     '07', '08', '09', '10', '11', '12', '13',
                                     '14', '15', '16', '17', '18', '19', '20',
                                     '21', '22', '23'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        /*{
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }*/
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  //public lineChartPlugins = [pluginAnnotations];

  constructor(
  	private router:Router, 
  	private alertService:AlertService, 
  	private dashboardService:DashboardService) { 
  	
  }

  ngOnInit() {
  	this.llenarDatos();
    this.llenarChart();

  }

  llenarDatos(){
    
    this.dashboardService.listar()
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            this.existencias = response.result;
          }else{
            console.log("No se pudo obtener la data");
          }
        }
    );
  }

  llenarChart(){

    this.horas=[];
    this.cantidades=[];

    //this.selectedDate=Date.now().toString();
    this.dashboardService.graficar(this.date1.toString().substring(11,15)
      +"-"+this.date1.toString().substring(4,7)+"-"+this.date1.toString().substring(8,10))
      .subscribe(
        (response)=>{
          console.log(response);
          //let data = response['list'];
          if(response.ok){
            //this.horas = [];
            response.result.forEach((i) => {
                this.horas.push(i.hora);
                this.cantidades.push(i.cantidad);
                //console.log(i.hora);
                //console.log(i.cantidad);
            })
            console.log(this.horas);
            console.log(this.cantidades);
            for (var i = 0; i < this.lineChartData[0].data.length ; i++) {
              
              this.lineChartData[0].data[i]=0;
            }
            
            for (var i = 0; i < this.horas.length ; i++) {
              
              this.lineChartData[0].data[this.horas[i]]=this.cantidades[i];
            }
            console.log(this.lineChartData[0].data);
            this.chart.update();
            //ventas_dia = this.makeArray(response, 'cantidad');
            /*const horas =this.makeArray(response, 'hora');
            console.log(ventas_dia);
            for (var i = horas.length - 1; i >= 0; i--) {
              
              this.lineChartData[0].data[horas[i]]=ventas_dia[i];
            }*/
            //this.datos = response.result;
          }else{
            console.log("No se pudo obtener la data");
          }
        }
    );
  }

  /*makeArray(array, value) {
  return array.map(function(a) {
    return {[value]: a[value]};
  });
  }*/

  btnAceptar(fecha: String){

    this.horas=[];
    this.cantidades=[];
  	
    this.dashboardService.graficar(fecha.toString().substring(11,15)
      +"-"+fecha.toString().substring(4,7)+"-"+fecha.toString().substring(8,10))
      .subscribe(
        (response)=>{
          console.log(response);
          
          if(response.ok){
            //this.horas = [];
            response.result.forEach((i) => {
                this.horas.push(i.hora);
                this.cantidades.push(i.cantidad);
                //console.log(i.hora);
                //console.log(i.cantidad);
            })
            console.log(this.horas);
            console.log(this.cantidades);
            for (var i = 0; i < this.lineChartData[0].data.length ; i++) {
              
              this.lineChartData[0].data[i]=0;
            }
            
            for (var i = 0; i < this.horas.length ; i++) {
              
              this.lineChartData[0].data[this.horas[i]]=this.cantidades[i];
            }
            console.log(this.lineChartData[0].data);
            this.chart.update();
          }else{
            console.log("No se pudo obtener la data");
          }
          //console.log(this.horas);
        }
      );

  }

  
}
