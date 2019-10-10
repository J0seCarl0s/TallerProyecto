import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PlatosService } from '../platos.service'

@Component({
  selector: 'app-platos-add',
  templateUrl: './platos-add.component.html',
  styleUrls: ['./platos-add.component.css'],
  providers:  [ PlatosService ]
})
export class PlatosAddComponent implements OnInit {
  nombre_plato:string="";
  precio_plato:number=0.0;
  necesitapre_plato:string="";

  constructor(private router:Router, private platosService:PlatosService) { }

  ngOnInit() {
  }

  btnAgregarPlato(){

    this.platosService.registrar(this.nombre_plato, this.precio_plato,this.necesitapre_plato)
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            console.log("Elemento agregado correctamente");
          }else{
            console.log("Ha ocurrido un error");
          }
          this.router.navigate(['/admin/platos']);
        }
      )
  }

  btnCancelar(){
    this.router.navigate(['/admin/platos']);
  }

}
