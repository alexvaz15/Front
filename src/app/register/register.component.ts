import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  arregloss=[];
  registerForm: FormGroup;
    
  constructor(private _formbuilder: FormBuilder,private _authservice: AuthServiceService,  private _router: Router) { 
    if(_authservice.isAutenticated())
    {
     this._router.navigate(['landing-page'])    
    }
  }

  ngOnInit(): void {
    this._authservice.getUsuarioss().subscribe((data )=>{
      this.arregloss=data;
      console.log(this.arregloss);
    });
  

  this.registerForm = this._formbuilder.group({
    
    username:['', Validators.required],
    lastname:['', Validators.required],
    firstname:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required]
  });
}

adduser(): void {
    const data = this.registerForm.value;
    if(data.username && data.lastname && data.firstname && data.email && data.password ){
      this._authservice.adduser(data.username, data.lastname, data.firstname, data.email, data.password).subscribe(access => {
      console.log("datos agregados"); 
      }, error => {
        console.log("datos no agregados");
      })
    }
  }
}



