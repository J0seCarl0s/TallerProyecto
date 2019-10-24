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

    // EFECTOS NAV

    efectos(id:number)
    {
      let linkDasboard = document.getElementById('link-dashboard'); 
  
      linkDasboard.classList.remove('active'); 
  
      switch(id){
        case 1:{
          linkDasboard.classList.add('active');
        }break;
      }
    }  
}
