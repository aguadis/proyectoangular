import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  // esta es una forma pero no es la que va
  //nombre = 'Cintia Lorena';
  //apellido = 'Necol';

//inicializar variables de instancia 
  nombre: string = '';
  apellido: string = '';
  acerca: string = '';
  frase: string = '';
  
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private proyectoService: ProyectoService) { }
  

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.proyectoService.getDatos().subscribe(proyecto => {
      console.log(proyecto);
       //Definir infomación a mostrar
        this.nombre=proyecto.nombre;
        this.apellido=proyecto.apellido;
        this.acerca=proyecto.acerca;
        this.frase=proyecto.frase;
        
      });
}

}
