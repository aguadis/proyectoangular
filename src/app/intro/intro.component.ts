import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  intro: any[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
   )
   { }

  ngOnInit(): void {
   //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?


}
}


