import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from "../mesas/mesas.service";

@Component({
  selector: 'app-dashboard-mozo',
  templateUrl: './dashboard-mozo.component.html',
  styleUrls: ['./dashboard-mozo.component.css']
})
export class DashboardMozoComponent implements OnInit {

  mesaEscogida:number = 1;
  mesas: any[];

  constructor(private router:Router, 
              private mesasService:MesasService, 
              ) { }

  ngOnInit() {
  	this.cargarMesas();
  }

  cargarMesas() {
    this.mesas = this.mesasService.listar().result;
  }

  btnCambioNumeroMesa(numMesa:number)
  {
    console.log("Mesa escogida: " + numMesa);
    this.mesaEscogida = numMesa;
  }

  recargarPedidos(){ //NECESITA MEJORARSE
    let temp = this.mesaEscogida;
    this.mesaEscogida = 0;
    this.mesaEscogida = temp;
  }
}
