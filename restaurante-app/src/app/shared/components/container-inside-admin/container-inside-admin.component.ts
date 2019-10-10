import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-container-inside-admin',
  templateUrl: './container-inside-admin.component.html',
  styleUrls: ['./container-inside-admin.component.css']
})
export class ContainerInsideAdminComponent implements OnInit {


  titulo="Dashboard";

  constructor(private router:Router) { }

  ngOnInit() {
    //this.router.navigate(['/admin/dashboard']);
  }

  redirectDashboard()
  {
    this.efectos(1);
    this.router.navigate(['/admin/dashboard']);
    this.titulo="Dashboard";
  }

  redirectPlatos()
  {
    this.efectos(3);
    this.router.navigate(['/admin/platos']);
    this.titulo="Platos";
  }

  redirectInsumos()
  {
    this.efectos(4);
    this.router.navigate(['/admin/insumos']);
    this.titulo="Insumos";
  }

  redirectProveedores()
  {
    this.efectos(2);
    this.router.navigate(['/admin/proveedores']);
    this.titulo="Proveedores";
  }


  // EFECTOS NAV

  efectos(id:number)
  {
    let linkDasboard = document.getElementById('link-dashboard');
    let linkProveedores = document.getElementById('link-proveedores');
    let linkPlatos = document.getElementById('link-platos');
    let linkInsumos = document.getElementById('link-insumos');

    linkDasboard.classList.remove('active');
    linkProveedores.classList.remove('active');
    linkPlatos.classList.remove('active');
    linkInsumos.classList.remove('active');

    switch(id){
      case 1:{
        linkDasboard.classList.add('active');
      }break;
      case 2:{
        linkProveedores.classList.add('active');
      }break;
      case 3:{
        linkPlatos.classList.add('active');
      }break;
      case 4:{
        linkInsumos.classList.add('active');
      }break;
    }
  }

}
