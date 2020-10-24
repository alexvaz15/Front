import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formuForm = new FormGroup({
    autocomplete: new FormControl(''),
    text: new FormControl(''),
    file: new FormControl(''),
    email: new FormControl(''),
    submit: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
