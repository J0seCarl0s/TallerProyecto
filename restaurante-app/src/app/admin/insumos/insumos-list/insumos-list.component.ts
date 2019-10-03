import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-insumos-list',
  templateUrl: './insumos-list.component.html',
  styleUrls: ['./insumos-list.component.css']
})
export class InsumosListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  editar()
  {
    this.router.navigate(["admin/insumos/1"]);
  }
}
