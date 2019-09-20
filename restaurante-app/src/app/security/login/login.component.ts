
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:string="elvis@gmail.com";
  password:string="123456";

  constructor(private router:Router, private securityService:SecurityService) { }

  ngOnInit() {
    localStorage.clear();
  }

  login()
  {
    this.securityService.login(this.email,this.password)
      .subscribe(
        (response)=>{
          console.log(response);
          localStorage.setItem("token", response.token);
          this.router.navigate(['/admin/dashboard']);
        }
      )
  }
}
