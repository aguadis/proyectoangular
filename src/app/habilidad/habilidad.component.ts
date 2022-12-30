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
  
 

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private sHabilidad:HabilidadService) { }

  ngOnInit(): void {
   
     {
     this.cargarhabilidad(); 
       //Definir infomación a mostrar
        
    };

      
  }

  cargarhabilidad(): void{
    this.sHabilidad.list()
  }

  
  delete(id:number){
if(id != undefined){
  this.sHabilidad.delete(id).subscribe (data =>{

//alert("habilidad eliminada correctamente")
this.cargarhabilidad();

}, err =>{
  alert("no se pudo eliminar la habilidad");
})
  }
  }

}