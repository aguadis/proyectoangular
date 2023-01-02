import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../entidades/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[]=[];
  
  form: any;
  Img: any;
  Trabajo: any;
//inicializar variables de instancia 



  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    ) { }
  ngOnInit(): void {
    
  }
  
  
  }
  

    

