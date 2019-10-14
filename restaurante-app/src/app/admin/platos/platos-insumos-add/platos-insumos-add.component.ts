import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { PlatosService } from '../platos.service';



@Component({
  selector: 'app-platos-insumos-add',
  templateUrl: './platos-insumos-add.component.html',
  styleUrls: ['./platos-insumos-add.component.css']

})
export class PlatosInsumosAddComponent implements OnInit {
  idPlato:number=0;
  insumos: any[];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private platosService:PlatosService
    ) {}
  //constructor(private router:Router) {}

  ngOnInit() {
      this.llenarDatos();
  }


   llenarDatos()
  {
    this. idPlato= parseInt( this.route.snapshot.paramMap.get("id")); 
    this.platosService.listarInsumos(this.idPlato)
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

}
