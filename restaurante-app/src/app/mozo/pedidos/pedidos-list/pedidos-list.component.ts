import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from "../../mesas/mesas.service";
import { PedidosService } from "../pedidos.service";
import { PlatosService } from "../../platos/platos.service";
import { AlertService } from "../../../shared/services/alert.service";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  mesaEscogida:number = 1;
  mesas: any[];
  pedidos: any[];

  constructor(private router:Router,
              private mesasService:MesasService, 
              private platosService:PlatosService, 
              private pedidosService:PedidosService, 
              private alertService:AlertService) { }

  ngOnInit() {
  	this.llenarDatos();
  }

  llenarDatos()
  {
  	 this.mesas = this.mesasService.listar().result;
     this.cargarPedidos();
  }

  cargarPedidos()
  {
      this.pedidosService.listarDeMesa(this.mesaEscogida).subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            this.pedidos = response.result;
          }else{
            console.log("No se pudo obtener la data");
          }
        }
      );
  }

    btnEditar(id: number)
  {
      console.log("Navegando a editar el pedido: "+id);

      this.router.navigate(['/mozo/pedidos/editar/'+id]);
  }

  btnEliminar(id:number)
  {
    this.pedidosService.eliminar(id)
    .subscribe(
      (response)=>{
        if(response.ok)
        {
          this.alertService.success("Eliminado correctamente","Eliminar");
          console.log("Se elimino correctamente");
          this.llenarDatos();
        }else{
          console.log("Ocurrio un error");
          this.alertService.error("Error al eliminar pedido",null);  
        }
      },
      (err) => {
        console.log("Ocurrio un error");
        this.alertService.error("Error al eliminar pedido",err);
      }
    )
  }

  btnCambioNumeroMesa(numMesa:number)
  {
    console.log("Mesa escogida: " + numMesa);
    this.mesaEscogida = numMesa;
    this.cargarPedidos();
  }
}
