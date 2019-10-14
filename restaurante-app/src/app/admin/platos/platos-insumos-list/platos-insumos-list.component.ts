import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { PlatosService } from '../platos.service';


@Component({
  selector: 'app-platos-insumos-list',
  templateUrl: './platos-insumos-list.component.html',
  styleUrls: ['./platos-insumos-list.component.css'],
  providers:  [ PlatosService ]
})

export class PlatosInsumosComponent implements OnInit {
  idPlato:number=0;
  insumos: any[];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private platosService:PlatosService) { 

  }

 ngOnInit() {    
      this. idPlato= parseInt( this.route.snapshot.paramMap.get("id")); 
      this.platosService.listarInsumosPlatos(this.idPlato)
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
           
  }


  btnAgregar()
  {

      console.log("Navegando a agregar un nuevo plato: ");
      //this.router.navigate(['/admin/platos/insumos/agregar/'+this.idPlato]);
  }

  btnRetroceder(){
    this.router.navigate(['/admin/platos/']);
  }
  

}