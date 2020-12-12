import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router';
//Decoradores
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
//Clase principal del Componente de la logica de negocio

export class LandingPageComponent implements OnInit {
   products = [];
  status : Boolean=false;
  registro:any;
  registro1:any;
  registro2:any;

  nameButton : String = 'Mostrar';
  info  : String = 'No hay datos';
  
  constructor(private serviceService : ServiceService,private _authservice: AuthServiceService,private _formbuilder: FormBuilder,  private _router: Router) { 

    if(!_authservice.isAutenticated())
    {
     _router.navigate(['login'])    
    }
  }
  arreglos=[];
  landingform: FormGroup;
  landingform1: FormGroup;
 
  // cleanService(){
  //   this.products=[];
  // }
  // showService(){
  //   this.status = !this.status //Toggle
  //   console.log(this.status);
  //   if(this.status){
  //     this.nameButton='Ocultar'
  //   }else{
  //     this.nameButton='Mostrar'
  //   }
  // }
  // ngOnInit(): void {
  //   this.serviceService.getProduct("products/").subscribe((data : any[]) => {
  //     console.log(data);
  //     this.products = data;});
    
  // }
  sendService(){
    //this.info='Si hay datos';
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  ngOnInit(): void{
    this._authservice.getDatos().subscribe((data )=>{
      this.arreglos=data;
      console.log(this.arreglos);
    });

    this.landingform = this._formbuilder.group({
      id:['', Validators.required],
      name:['', Validators.required],
      age:['', Validators.required],
      email:['', Validators.required]
    });

    this.landingform1 = this._formbuilder.group({
      id:['', Validators.required],
      name:['', Validators.required],
      age:['', Validators.required],
      email:['', Validators.required]
    })
    
  }

    agregar(): void {
      const data = this.landingform1.value;
      if(data.name && data.age && data.email){
        this._authservice.addDatos(data.name, data.age, data.email).subscribe(access => {
        console.log("datos agregados");
        this._router.navigate(['login']);
        }, error => {
          console.log("datos no agregados");
        })
      }
    }

    eliminar(): void {
      const data = this.landingform1.value;
      console.log(data.id)
      if(data.id)
      {
        this._authservice.delDatos(data.id).subscribe(access => {
        console.log("datos validos");
        }, error => {
          console.log("datos erroneos");
        })
      }     
    }

    editar(): void {
      const data = this.landingform1.value;
      if(data.id && data.name && data.age && data.email){
        this._authservice.editar(data.id, data.name, data.age, data.email).subscribe(access => {
        console.log("datos validos");
        }, error => {
          console.log("datos no agregados");
        })
      }
    }

    actualizar(): void {
      window.location.reload();
    }




}

