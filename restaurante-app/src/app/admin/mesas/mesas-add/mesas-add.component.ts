import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MesasService } from '../mesas.service';

import { AlertService } from "../../../shared/services/alert.service";

@Component({
  selector: 'app-mesas-add',
  templateUrl: './mesas-add.component.html',
  styleUrls: ['./mesas-add.component.css']
})
export class MesasAddComponent implements OnInit {

	numero_mesa: number;

  constructor(
  		private router:Router, 
    	private mesasService:MesasService,
    	private alertService:AlertService
  	) { }

  ngOnInit() {
  }

  btnAgregarMesa(){
  	this.mesasService.registrar(this.numero_mesa)
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            console.log("Elemento agregado correctamente");
            this.alertService.success("Se guardo correctamente la mesa","Mesa");
          }else{
            console.log("Ha ocurrido un error");
          }
          this.router.navigate(['/admin/mesas']);
        },
        (err)=>{
          this.alertService.error("Error al guardar mesa",err);
        }
      )
  }

  btnCancelar(){
  	this.router.navigate(['/admin/dashboard']);
  }
}
