import { Component, OnInit } from '@angular/core';
import { Educacion } from '../entidades/educacion';







@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
//inicializar variables de instancia 


    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    educacion: any; //se llama al modelo que es un array
  
 

    constructor(
      //Inyectar el Servicio para tener acceso en la clase a los Métodos
    ) { }
  ngOnInit(): void {
    
  }
  
   
   
  
  
  }

  

