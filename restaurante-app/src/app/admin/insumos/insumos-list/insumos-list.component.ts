import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { InsumosService } from '../insumos.service';


@Component({
  selector: 'app-insumos-list',
  templateUrl: './insumos-list.component.html',
  styleUrls: ['./insumos-list.component.css'],
  providers:  [ InsumosService ]

})
export class InsumosListComponent implements OnInit {

  insumos: any[];

  constructor(private router:Router, private insumosService:InsumosService) {}
  //constructor(private router:Router) {}

  ngOnInit() {
    console.log("fuck");
      this.insumosService.listar()
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            this.insumos = response.result;
          }else{
            console.log("No se pudo obtener la data");
          }
        }
      );
  }

  btnEditar(id: number)
  {
      console.log("Navegando a editar el insumo: "+id);

      this.router.navigate(['/admin/insumos/editar/'+id]);
  }

  btnAgregar()
  {
      console.log("Navegando a agregar un nuevo insumo: ");

      this.router.navigate(['/admin/insumos/agregar']);
  }
}
