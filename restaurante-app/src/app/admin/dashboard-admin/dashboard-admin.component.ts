import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AlertService } from "../../shared/services/alert.service";
import { DashboardService } from "../dashboard-admin/dashboard.service";
import { ChartDataSets, ChartOptions, Chart } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import {FormControl} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//import 'rxjs/operators';
//import { Map } from 'rxjs/operators';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']

})
export class DashboardAdminComponent implements OnInit {

  FECHA_INICIO1:Date=null;
  FECHA_FIN1:Date=null;
  FECHA_INICIO2:Date=null;
  FECHA_FIN2:Date=null;
  reportesv: any[];
  reportesp: any[];



  serializedDate = new FormControl((new Date()).toISOString());
  existencias:any[];
	selectedDate:String;
	datos:any[][];
  fecha:Date;
  date1 = new Date();
  horas:any[];
  cantidades:any[];
  //cuadroEstadistico: ChartsModule;//= document.getElementById("estadisticas");
  FECHA_INICIO3:Date=null;
  FECHA_FIN3:Date=null;
  reportesCaja: any[];

  public lineChartData: ChartDataSets[] = 
  [
   
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
    //this.llenarChart();

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

    this.dashboardService.graficar(this.date1.toString().substring(11,15)
      +"-"+this.date1.toString().substring(4,7)+"-"+this.date1.toString().substring(8,10))
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
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
            
          }else{
            console.log("No se pudo obtener la data");
          }
        }
    );
  }



  btnAceptar(fecha: String){

    this.horas=[];
    this.cantidades=[];
        console.log(this.lineChartData[0].data);

    this.dashboardService.graficar(fecha.toString())//.substring(11,15)
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
            //this.cuadroEstadistico.update();
          }else{
            console.log("No se pudo obtener la data");
          }
          //console.log(this.horas);
        }
      );

  }


  btnGenerarReporteVentas(){

    this.dashboardService.reporteventas(this.FECHA_INICIO1,this.FECHA_FIN1)
      .subscribe(       

        (response)=>{
          console.log(response);
          if(response.ok){
            console.log("REPORTE GENERADO CORRECTAMENTE "+this.FECHA_INICIO1+"  "+this.FECHA_FIN1);
            this.reportesv = response.result;
          }
        },
        (err) => {          
          console.log("ERROR AL GENERAR REPORTE"+this.FECHA_INICIO1+this.FECHA_FIN1);
        }        
      )
  }

  btnGenerarReportePlatos(){

    this.dashboardService.reporteplatos(this.FECHA_INICIO2,this.FECHA_FIN2)
      .subscribe(       

        (response)=>{
          console.log(response);
          if(response.ok){
            console.log("REPORTE GENERADO CORRECTAMENTE "+this.FECHA_INICIO2+"  "+this.FECHA_FIN2);
            this.reportesp = response.result;
          }
        },
        (err) => {          
          console.log("ERROR AL GENERAR REPORTE"+this.FECHA_INICIO2+this.FECHA_FIN2);
        }        
      )
  }

  btnCierreCaja(){

    this.dashboardService.reportecaja(this.FECHA_INICIO3,this.FECHA_FIN3)
      .subscribe(       

        (response)=>{
          console.log(response);
          if(response.ok){
            console.log("REPORTE GENERADO CORRECTAMENTE "+this.FECHA_INICIO3+"  "+this.FECHA_FIN3);
            this.reportesCaja = response.result;
          }
        },
        (err) => {          
          console.log("ERROR AL GENERAR REPORTE"+this.FECHA_INICIO3+this.FECHA_FIN3);
        }        
      )
  }
    
}
