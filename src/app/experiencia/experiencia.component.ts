import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //inicializar variables de instancia 

  experiencia: any;
  
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private proyectoService: ProyectoService) { }

  ngOnInit(): void {
//Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
this.proyectoService.getDatos().subscribe(proyecto => {
  console.log(proyecto);
  this.experiencia=proyecto.experiencia;
   
  });

  }
}

