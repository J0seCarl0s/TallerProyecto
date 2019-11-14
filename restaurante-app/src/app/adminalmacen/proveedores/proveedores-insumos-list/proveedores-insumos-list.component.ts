import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedores-insumos-list',
  templateUrl: './proveedores-insumos-list.component.html',
  styleUrls: ['./proveedores-insumos-list.component.css'],
  providers:  [ ProveedoresService ]
})
export class ProveedoresInsumosListComponent implements OnInit {
	
  idProveedor:number=0;
  insumos: any[];

  constructor(
  	private router:Router,
    private route:ActivatedRoute,
    private proveedoresService:ProveedoresService) {
  }

  ngOnInit() {
  	  this. idProveedor= parseInt( this.route.snapshot.paramMap.get("id")); 
      this.proveedoresService.listarInsumosProveedor(this.idProveedor)
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

  btnAgregar()
  {
      console.log("Navegando a agregar un nuevo plato: ");
      this.router.navigate(['/adminalmacen/proveedores/agregar/insumos/'+this.idProveedor]);
  }

  btnRetroceder(){
    this.router.navigate(['/adminalmacen/proveedores/']);
  }

  btnEditar(){

  }

}
