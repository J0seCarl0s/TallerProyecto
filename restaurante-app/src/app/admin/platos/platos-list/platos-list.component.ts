import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PlatosService } from '../platos.service';


@Component({
  selector: 'app-platos-list',
  templateUrl: './platos-list.component.html',
  styleUrls: ['./platos-list.component.css'],
  providers:  [ PlatosService ]
})

export class PlatosListComponent implements OnInit {
	platos: any[];

  constructor(private router:Router, private platosService:PlatosService) { 

  }

 ngOnInit() {
    console.log("fuck");
      this.platosService.listar()
      .subscribe(
        (response)=>{
          console.log(response);
          if(response.ok){
            this.platos = response.result;
          }else{
            console.log("No se pudo obtener la data");
          }
        }
      );
  }

  btnEditar(id: number)
  {
      console.log("Navegando a editar el plato: "+id);

      this.router.navigate(['/admin/platos/editar/'+id]);
  }

  btnAgregar()
  {
      console.log("Navegando a agregar un nuevo plato: ");

      this.router.navigate(['/admin/platos/agregar']);
  }

}
