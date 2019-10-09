import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { InsumosService } from '../insumos.service';


@Component({
  selector: 'app-insumos-list',
  templateUrl: './insumos-list.component.html',
  styleUrls: ['./insumos-list.component.css']
})
export class InsumosListComponent implements OnInit {

  insumos: any[];

  //constructor(private router:Router, private insumosService:InsumosService) {}
  constructor(private router:Router) {}

  ngOnInit() {
    console.log("fuck");
      /*this.insumosService.listar()
      .subscribe(
        (response)=>{
          console.log(response);
        }
      )*/
    this.insumos = [
      {
        id: 1,
        nombre: "Arroz",
        cantidadMínima: 10.0
      },
      {
        id: 2,
        nombre: "Papa",
        cantidadMínima: 5.0
      }
    ]
  }

  btnEditar(id: number)
  {/*
    this.insumosService.editar(1, "Insumo random", 10.0)
      .subscribe(
        (response)=>{
          console.log(response);
        }
      )
      */
      console.log(id);
      this.router.navigate(['/admin/insumos/editar/'+id]);
  }

  btnAgregar()
  {/*
    this.insumosService.registrar("Insumo random", 10.0)
      .subscribe(
        (response)=>{
          console.log(response);
        }
      )
      */
      this.router.navigate(['/admin/insumos/agregar']);
  }
}
