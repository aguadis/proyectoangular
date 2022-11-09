import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
//inicializar variables de instancia 
proyectos: any;
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.proyectoService.getDatos().subscribe(proyecto => {
      console.log(proyecto);
       //Definir infomación a mostrar
       this.proyectos=proyecto.proyectos;
        
      });
    
  }

}
