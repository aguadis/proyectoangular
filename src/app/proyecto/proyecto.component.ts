import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
import { Proyecto } from '../entidades/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[]=[];
  
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private ProyectoService:ProyectoService,
    ) { }
    
    listarProyecto():void{
     this.ProyectoService.list().subscribe ((data: Proyecto[])=>{
      this.proyecto=data;
     });
    }


   ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.listarProyecto(); 
 
          }
  
        
    }


 
  

    

