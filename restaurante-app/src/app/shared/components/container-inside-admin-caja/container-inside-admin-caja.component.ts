import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-container-inside-admin-caja',
  templateUrl: './container-inside-admin-caja.component.html',
  styleUrls: ['./container-inside-admin-caja.component.css']
})
export class ContainerInsideAdminCajaComponent implements OnInit {


  titulo="Dashboard";

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  redirectDashboard()
  {
    this.efectos(1);
    this.router.navigate(['/admincaja/dashboard']);
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
