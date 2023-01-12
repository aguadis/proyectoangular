import { Component, OnInit } from '@angular/core';
import { HabilidadService } from '../servicios/habilidad.service';
import { Habilidad } from '../entidades/habilidad';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})

export class HabilidadComponent implements OnInit {
//inicializar variables de instancia 

 habilidades: Habilidad[]=[]; //se llama al modelo que es un array
  habilidad: any;
  
 

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private HabilidadService:HabilidadService,) { }

  listarHabilidad():void{
    this.HabilidadService.list().subscribe ((data: any)=>{
     this.habilidad=data;
    });
   }


  ngOnInit(): void {
     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
     this.listarHabilidad(); 

         }
 
       
   }