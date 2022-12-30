import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Contacto[]=[];

  constructor(
//Inyectar el Servicio para tener acceso en la clase a los Métodos
)
   { }

  ngOnInit(): void {
//Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?


}
}
  


