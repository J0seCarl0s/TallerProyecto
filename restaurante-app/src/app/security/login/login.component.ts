
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { SecurityService } from '../security.service';

import { AlertService } from "../../shared/services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string="";
  password:string="";

  constructor(
    private router:Router, 
    private securityService:SecurityService,
    private alertService:AlertService
    ) { }

  ngOnInit() {
    localStorage.clear();
  }

  btnIniciarSesion()
  {
    //this.router.navigate(['/admin/dashboard']);
    //localStorage.setItem("token", "sddsfsdfd");

    this.securityService.login(this.username,this.password)
      .subscribe(
        (response)=>{
          console.log(response);
          localStorage.setItem("token", response.token);
          this.router.navigate(['/admin/dashboard']);
        },
        (err)=>{
          this.alertService.error("Datos incorrectos",err)
        }
      )
  }
}
