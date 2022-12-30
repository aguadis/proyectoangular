import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../entidades/contacto';

import { ProyectoService } from '../servicios/proyecto.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto: Contacto[]=[];
  form: FormGroup;
  correo = '';
  telefono = '';
  img ='';
  frase = '';
  titulo = '';
 

  constructor(public _servicio: ProyectoService,  private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      
   })

  
  }  ngOnInit(): void {
   
  }
}
