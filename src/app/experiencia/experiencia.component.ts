import { Component, Input, OnInit } from '@angular/core';
//import { Experiencia } from '../entidades/experiencia';
//import { ExperienciaService } from '../servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  
  //inicializar variables de instancia 

 //experiencia: Experiencia[]=[]; //se llama al modelo que es un array
  experiencia:any;

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    //private sExperiencia:ExperienciaService
    ) { }
    ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
       //{
       //this.cargarExperiencia(); 
         //Definir infomación a mostrar
          
      };
  
        
    }
  //cargarExperiencia() {
    
  //}
  
   // cargar(): void{
    //  this.sExperiencia.list().subscribe(data => {
      
     // });
    //}
  
    
   // delete(id:number){
  //if(id != undefined){
   // this.sExperiencia.delete(id).subscribe (data =>{
  
  //alert("habilidad eliminada correctamente")
  //this.cargarExperiencia();
  
  //}, err =>{
   // alert("no se pudo eliminar la habiliadad");
  //})
   // }
   // }
  
  
  //}


