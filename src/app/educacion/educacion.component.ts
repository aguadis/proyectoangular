import { Component, OnInit } from '@angular/core';
import { Educacion } from '../entidades/educacion';
import { EducacionService } from '../servicios/educacion.service';





@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
//inicializar variables de instancia 


    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    estudios: Educacion[]=[]; //se llama al modelo que es un array
  
 

    constructor(
      //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sEducacion:EducacionService) { }
  
    ngOnInit(): void {
     
       {
       this.cargarEducacion(); 
         //Definir infomación a mostrar
          
      };
    }
  
    cargarEducacion(): void{
      
      
    
    }
  
    
    delete(id:number){
  if(id != undefined){
    this.sEducacion.delete(id).subscribe (data =>{
  
  //alert("habilidad eliminada correctamente")
  this.cargarEducacion();
  
  }, err =>{
    alert("no se pudo eliminar la educacion");
  })
    }
    }
  
  
  }

  

