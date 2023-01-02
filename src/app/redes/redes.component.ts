import { Component, OnInit } from '@angular/core';
import { Red } from '../entidades/red';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes: any;
  

  constructor()
    //Inyectar el Servicio para tener acceso en la clase a los Métodos

{ }

  ngOnInit(): void {
  //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?

}

}



