import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
import { Proyecto } from '../entidades/proyecto';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //inicializar variables de instancia 



  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    ) { }
  ngOnInit(): void {
    
  }
  
  
  }
    

