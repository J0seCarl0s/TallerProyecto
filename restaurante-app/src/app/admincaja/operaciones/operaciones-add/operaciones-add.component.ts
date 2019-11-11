import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CajaService } from '../../caja.service';
import { AlertService } from "../../../shared/services/alert.service";

@Component({
  selector: 'app-operaciones-add',
  templateUrl: './operaciones-add.component.html',
  styleUrls: ['./operaciones-add.component.css']
})
export class OperacionesAddComponent implements OnInit {

  constructor(private router:Router,
              private cajaService:CajaService,
              private alertService:AlertService
              ) { }

  esEntrada:boolean = true;
  monto:number = 0.0;
  descripcion:string = "";

  ngOnInit() {
  }

}
