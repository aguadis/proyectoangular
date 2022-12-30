import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: any;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private proyectoService: ProyectoService)
   { }

  ngOnInit(): void {
  //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?


}
}


