import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from "../../mesas/mesas.service";
import { PedidosService } from "../pedidos.service";
import { PlatosService } from "../../platos/platos.service";
import { AlertService } from "../../../shared/services/alert.service";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  mesasPedidos: any[];
  
  constructor(private router:Router,
              private mesasService:MesasService, 
              private platosService:PlatosService, 
              private pedidosService:PedidosService, 
              private alertService:AlertService) { }

  ngOnInit() {
  	this.llenarDatos();
  }

  llenarDatos()
  {
  	this.mesasPedidos = [];

     let mesas = this.mesasService.listar().result;

     for(let mesa of mesas){
       
       this.pedidosService.listarDeMesa(mesa.numMesa).subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            this.mesasPedidos.push({
              numMesa: mesa.numMesa,
              pedidos: response.result
            });
          }else{
            console.log("No se pudo obtener la data");
          }
        }
      );

     }
  }
}
