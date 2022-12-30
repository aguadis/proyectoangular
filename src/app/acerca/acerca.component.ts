import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  // esta es una forma pero no es la que va
  //nombre = 'Cintia Lorena';
  //apellido = 'Necol';

//inicializar variables de instancia 
acerca: Contacto[]=[];
nombre: string = '';
  apellido: string = '';
  
  frase: string = '';
  
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  ) { }
  

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    
       //Definir infomación a mostrar
        
}

}
