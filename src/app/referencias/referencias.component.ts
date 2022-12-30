import { Component, OnInit } from '@angular/core';
import { Referencia } from '../entidades/referencia';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {
  referencia: Referencia[]=[];
  



  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
 
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?

  

}
}