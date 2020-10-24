import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER = 'http://localhost:3000/'

  constructor(private httpclient : HttpClient, public AuAuth : AngularFireAuth) { }
   
  public getProduct(nameEndPoint:String){
  return this.httpclient.get(this.REST_API_SERVER + nameEndPoint);
  }
  async loginGoogle(){
    try {
      return this.AuAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error){
      console.log(error);
    }      
  }

}
