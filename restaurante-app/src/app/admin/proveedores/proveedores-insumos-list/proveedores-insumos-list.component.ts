import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProveedoresService } from '../proveedores.service';

import { AlertService } from "../../../shared/services/alert.service";


@Component({
  selector: 'app-proveedores-insumos-list',
  templateUrl: './proveedores-insumos-list.component.html',
  styleUrls: ['./proveedores-insumos-list.component.css'],
  providers:  [ ProveedoresService ]
})
export class ProveedoresInsumosListComponent implements OnInit {
	
  idProveedor:number=0;
  insumos: any[];
  idInsumo:number=0;
  nombre_insumo:string="";
  cantidad_minima:number=0.0;

  constructor(
  	private router:Router,
    private route:ActivatedRoute,
    private proveedoresService:ProveedoresService,
    private alertService:AlertService) {

  }

  ngOnInit() {
    this.llenarDatos();
  }

  llenarDatos() {
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

      console.log("Navegando a agregar un nuevo insumo del proveedor: ");
      this.router.navigate(['/admin/proveedores/agregar/insumo/'+this.idProveedor]);
  }

  btnRetroceder(){
    this.router.navigate(['/admin/proveedores/']);
  }

  btnEditarInsumo(id:number){
    
    /*this.proveedoresService.registrarInsumoProveedor(this.idProveedor,this.idInsumo,this.nombre_insumo,this.cantidad_minima)
      .subscribe(
        (res)=>{
          if(res.ok)
          {
            this.alertService.success("Guardado correctamente","Guardar Proveedor");
            this.router.navigate(['/admin/proveedores']);
          }
        },
        (err) => {
          this.alertService.error("Error al guardar proveedor",err);
        }
      )*/
    /*console.log("Navegando a editar el insumo del proveedor: "+this.id);
    this.router.navigate(['/admin/proveedores/insumo/editar/'+this.id]);*/
  }

  btnEliminarInsumo(id: number){
    this.proveedoresService.eliminarProveedor(id)
    .subscribe(
      (res)=>{
        if(res.ok)
        {
          this.alertService.success("Eliminado correctamente","Eliminar");
          this.llenarDatos();
        }else{
          this.alertService.error("Error al eliminar proveedor",null);  
        }
      },
      (err) => {
        this.alertService.error("Error al eliminar proveedor",err);
      }
    )
  }

}
