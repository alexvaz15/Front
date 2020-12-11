import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  api: String = 'https://backidswww.herokuapp.com/';
  constructor(private HttpClientt: HttpClient) { }
  isAutenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user['token'] ? true : false
    }

  }

  logininit(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.HttpClientt.post(`${this.api}api/v1/login/`, { username, password }, httpOptions);
  }


  adduser(username: string, lastname: string, firstname: string, email: string, password: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.HttpClientt.post(`${this.api}api/v1/auth_user/authuser`, { username, lastname, firstname, email, password }, httpOptions);
  }
  getUsuarioss(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.HttpClientt.get(`${this.api}api/v1/auth_user/authuserget`, httpOptions);
  }
  // Obtener datos
  getDatos(): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'Token ' + user['token'],
      })
    };
    return this.HttpClientt.get(`${this.api}api/v1/datos/datos_get`, httpOptions);
  }
  // Borrar datos
  delDatos(id: string): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'Token ' + user['token'],
      })
    };
    return this.HttpClientt.delete(`${this.api}api/v1/datos/datos_delete/` + id, httpOptions);
  }
  // Añadir nuevos datos
  addDatos(name: string, age: string, email: string): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'Token ' + user['token'],
      })
    };
    return this.HttpClientt.post(`${this.api}api/v1/datos/datosModel_url`, { name, age, email }, httpOptions);
  }

  //  Editar datos
  editar(id: string, name: string, age: string, email: string): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'))
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'Token ' + user['token'],
      })
    };
    return this.HttpClientt.put(`${this.api}api/v1/datos/datos_edit/` + id, { name, age, email }, httpOptions);
  }

}

