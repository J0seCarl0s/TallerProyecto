import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-container-inside-admin',
  templateUrl: './container-inside-admin.component.html',
  styleUrls: ['./container-inside-admin.component.css']
})
export class ContainerInsideAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //this.router.navigate(['/admin/dashboard']);
  }

  redirectDashboard()
  {
    this.router.navigate(['/admin/dashboard']);
  }

  redirectPlatos()
  {
    this.router.navigate(['/admin/platos']);
  }

  redirectInsumos()
  {
    this.router.navigate(['/admin/insumos']);
  }

  redirectProveedores()
  {
    this.router.navigate(['/admin/proveedores']);
  }

}
