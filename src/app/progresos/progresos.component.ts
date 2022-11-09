import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
@Component({
  selector: 'app-progresos',
  templateUrl: './progresos.component.html',
  styleUrls: ['./progresos.component.css']
})
export class ProgresosComponent implements OnInit {
//inicializar variables de instancia 
 progresos: any;
 

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.proyectoService.getDatos().subscribe(proyecto => {
      
       //Definir infomación a mostrar
        this.progresos=proyecto.progresos;
    });

      
  }
}
