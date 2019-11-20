import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-container-inside-admin-almacen',
  templateUrl: './container-inside-admin-almacen.component.html',
  styleUrls: ['./container-inside-admin-almacen.component.css']
})
export class ContainerInsideAdminAlmacenComponent implements OnInit {


  titulo="Dashboard";

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  redirectDashboard()
  {
    this.efectos(1);
    this.router.navigate(['/adminalmacen/dashboard']);
    this.titulo="Dashboard";
  }

  redirectInsumos()
  {
    this.efectos(2);
    this.router.navigate(['/adminalmacen/insumos']);
    this.titulo="Dashboard";
  }

  redirectEntradas()
  {
    this.efectos(3);
    this.router.navigate(['/adminalmacen/entradas']);
    this.titulo="Dashboard";
  }

<<<<<<< HEAD
   redirectProveedores()
  {
    this.efectos(4);
    this.router.navigate(['/adminalmacen/proveedores']);
    this.titulo="Proveedores";
  }

  redirectAlmacenControl()
  {
    this.efectos(5);
    this.router.navigate(['/adminalmacen/almacenControl']);
    this.titulo="almacenControl";
=======
   redirectSalidas()
  {
    this.efectos(4);
    this.router.navigate(['/adminalmacen/salidas']);
    this.titulo="Dashboard";
  }

 redirectProveedores()
  {
    this.efectos(5);
    this.router.navigate(['/adminalmacen/proveedores']);
    this.titulo="Dashboard";
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
  }


    // EFECTOS NAV

    efectos(id:number)
    {
      let linkDasboard = document.getElementById('link-dashboard'); 
      let linkInsumos  = document.getElementById('link-insumos'); 
      let linkEntradas = document.getElementById('link-entradas'); 
<<<<<<< HEAD
      let linkProveedores = document.getElementById('link-proveedores');
      let linkAlmacenControl = document.getElementById('link-almacenControl');
=======
      let linkSalidas = document.getElementById('link-salidas'); 
      let linkProveedores = document.getElementById('link-proveedores'); 
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
  
      linkDasboard.classList.remove('active'); 
      linkInsumos.classList.remove('active'); 
      linkEntradas.classList.remove('active'); 
<<<<<<< HEAD
      linkProveedores.classList.remove('active');
      linkAlmacenControl.classList.remove('active');
=======
      linkSalidas.classList.remove('active'); 
      linkProveedores.classList.remove('active'); 
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
  
      switch(id){
        case 1:{
          linkDasboard.classList.add('active');
        }break;
        case 2:{
          linkInsumos.classList.add('active');
        }break;
        case 3:{
          linkEntradas.classList.add('active');
        }break;
        case 4:{
<<<<<<< HEAD
          linkProveedores.classList.add('active');
        }break;
        case 5:{
        linkAlmacenControl.classList.add('active');
=======
          linkSalidas.classList.add('active');
        }break;
        case 5:{
          linkProveedores.classList.add('active');
>>>>>>> abad1b02654a00bc3dc840f0714c7c5a373c1b82
        }break;
      }
    }  
}
