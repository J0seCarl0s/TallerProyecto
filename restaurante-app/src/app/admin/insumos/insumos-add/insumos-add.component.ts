import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insumos-add',
  templateUrl: './insumos-add.component.html',
  styleUrls: ['./insumos-add.component.css']
})
export class InsumosAddComponent implements OnInit {

  nombreInsumo:string="";
  cantidadInsumo:number=0.0;

  constructor(private router:Router) {}

  ngOnInit() {
  }

  btnAgregarInsumo(){
    //invocar al servicio

    //Luego redirecciona
    this.router.navigate(['/admin/insumos']);
  }
}
