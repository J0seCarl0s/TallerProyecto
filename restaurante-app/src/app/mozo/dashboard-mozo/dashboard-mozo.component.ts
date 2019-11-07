import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-mozo',
  templateUrl: './dashboard-mozo.component.html',
  styleUrls: ['./dashboard-mozo.component.css']
})
export class DashboardMozoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  	
  }

  redirectAgregarPedido() {
  	this.router.navigate(['/mozo/pedidos/agregar']);
  }

  redirectListarPedidos() {
    this.router.navigate(['/mozo/pedidos']);
  }
}
