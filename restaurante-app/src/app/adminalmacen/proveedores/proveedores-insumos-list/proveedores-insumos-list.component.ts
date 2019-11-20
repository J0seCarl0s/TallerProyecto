import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProveedoresService } from '../proveedores.service';

<<<<<<< HEAD
import { AlertService } from "../../../shared/services/alert.service";


=======
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
@Component({
  selector: 'app-proveedores-insumos-list',
  templateUrl: './proveedores-insumos-list.component.html',
  styleUrls: ['./proveedores-insumos-list.component.css'],
  providers:  [ ProveedoresService ]
})
export class ProveedoresInsumosListComponent implements OnInit {
	
  idProveedor:number=0;
  insumos: any[];
<<<<<<< HEAD
  idinsumo:number=0;
  nombre_insumo:string="";
  cantidad_minima:number=0.0;
=======
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82

  constructor(
  	private router:Router,
    private route:ActivatedRoute,
<<<<<<< HEAD
    private proveedoresService:ProveedoresService,
    private alertService:AlertService) {

  }

  ngOnInit() {
    this.llenarDatos();
  }

  llenarDatos() {
  	  this. idProveedor= parseInt( this.route.snapshot.paramMap.get("id")); 

=======
    private proveedoresService:ProveedoresService) {
  }

  ngOnInit() {
  	  this. idProveedor= parseInt( this.route.snapshot.paramMap.get("id")); 
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
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
<<<<<<< HEAD

      console.log("Navegando a agregar un nuevo insumo del proveedor: ");
      this.router.navigate(['/adminalmacen/proveedores/agregar/insumo/'+this.idProveedor]);
=======
      console.log("Navegando a agregar un nuevo plato: ");
      this.router.navigate(['/adminalmacen/proveedores/agregar/insumos/'+this.idProveedor]);
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
  }

  btnRetroceder(){
    this.router.navigate(['/adminalmacen/proveedores/']);
  }

<<<<<<< HEAD
  btnEditarInsumo(id:number){
    
    console.log("Navegando a editar el insumo: "+id);

    this.router.navigate(['/adminalmacen/insumos/editar/'+id]);
    
  }

  btnEliminarInsumo(id: number){
    
    this.proveedoresService.eliminarInsumo(id)
    .subscribe(
      (response)=>{
        if(response.ok)
        {
          this.alertService.success("Eliminado correctamente","Eliminar");
          console.log("Se elimino correctamente");
          this.llenarDatos();
        }else{
          console.log("Ocurrio un error");
          this.alertService.error("Error al eliminar insumo",null);  
        }
      },
      (err) => {
        console.log("Ocurrio un error");
        this.alertService.error("Error al eliminar insumo",err);
      }
    )
=======
  btnEditar(){

>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
  }

}
