import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

import { SalidasService } from "../salidas.service";

import { AlertService } from "../../../shared/services/alert.service";

@Component({
  selector: 'app-salidas-add',
  templateUrl: './salidas-add.component.html',
  styleUrls: ['./salidas-add.component.css']
})
export class SalidasAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnAgregarEntrada(){
  	
  }

}
