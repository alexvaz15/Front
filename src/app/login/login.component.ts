import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginFormulario: FormGroup;
  constructor(public authSer: ServiceService, private Formubuilder: FormBuilder, private authservice: AuthServiceService, private routerr: Router) { }


  ngOnInit(): void {
    this.LoginFormulario = this.Formubuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  logininit(): void {
    const data = this.LoginFormulario.value;

    if (data.email && data.password) {
      this.authservice.logininit(data.email, data.password).subscribe(access => {
        localStorage.setItem('user', JSON.stringify(access));
        this.routerr.navigate(['landing-page']);
      })
    }

  }
  async onGoogleLogin() {
    try {
      this.authSer.loginGoogle();
    } catch (error) { console.log(error) }
  }
}

