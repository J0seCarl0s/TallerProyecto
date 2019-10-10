import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { InsumosService } from '../insumos.service'

@Component({
  selector: 'app-insumos-add',
  templateUrl: './insumos-add.component.html',
  styleUrls: ['./insumos-add.component.css'],
  providers:  [ InsumosService ]
})
export class InsumosAddComponent implements OnInit {

  nombre_insumo:string="";
  cantidad_minima:number=0.0;

  constructor(private router:Router, private insumosService:InsumosService) {}

  ngOnInit() {
  }

  btnAgregarInsumo(){

    this.insumosService.registrar(this.nombre_insumo, this.cantidad_minima)
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            console.log("Elemento agregado correctamente");
          }else{
            console.log("Ha ocurrido un error");
          }
          this.router.navigate(['/admin/insumos']);
        }
      )
  }

  btnCancelar(){
    this.router.navigate(['/admin/insumos']);
  }
}
