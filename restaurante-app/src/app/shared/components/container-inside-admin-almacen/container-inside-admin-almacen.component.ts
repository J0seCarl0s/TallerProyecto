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

    // EFECTOS NAV

    efectos(id:number)
    {
      let linkDasboard = document.getElementById('link-dashboard'); 
      let linkInsumos  = document.getElementById('link-insumos'); 
      let linkEntradas = document.getElementById('link-entradas'); 
  
      linkDasboard.classList.remove('active'); 
      linkInsumos.classList.remove('active'); 
      linkEntradas.classList.remove('active'); 
  
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
      }
    }  
}
