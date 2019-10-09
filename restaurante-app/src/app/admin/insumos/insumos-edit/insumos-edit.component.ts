import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-insumos-edit',
  templateUrl: './insumos-edit.component.html',
  styleUrls: ['./insumos-edit.component.css']
})
export class InsumosEditComponent implements OnInit {

  nombreInsumo:string="";
  cantidadInsumo:number=0.0;

  //constructor(private router:Router, private insumosService:InsumosService) {}
  constructor(private router:Router) {}

  ngOnInit() {
  	console.log("fuck");
    this.nombreInsumo = "insumo random";
    this.cantidadInsumo = 5.0;
      /*this.insumosService.mostrar(5)
      .subscribe(
        (response)=>{
          console.log(response);
        }
      )*/
  }

  btnActualizarInsumo(){
    //invocar al servicio
    this.router.navigate(['/admin/insumos']);
  }
}
