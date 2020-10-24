import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( public authSer: ServiceService) { }

  ngOnInit(): void {
  }
  async onGoogleLogin(){
    try {
      this.authSer.loginGoogle();
    } catch (error) {console.log(error)}  
  }

}
