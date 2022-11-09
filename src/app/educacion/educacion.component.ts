import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
//inicializar variables de instancia 
educacion: any;

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.proyectoService.getDatos().subscribe(proyecto => {
      console.log(proyecto);
       //Definir infomación a mostrar
       this.educacion=proyecto.educacion;
      });
  }

}

