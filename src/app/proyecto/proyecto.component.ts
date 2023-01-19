import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
import { Proyecto } from '../entidades/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  
  proyecto: any=[]; //se llama al modelo que es un array
 item: Proyecto[]=[];
  ProyectoService: any;
  

 

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sProyecto:ProyectoService
    ) { }

    listarProyecto(): void{
      this.sProyecto.list().subscribe(data =>{
        this.proyecto=data;
      });
    }
   
  ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.sProyecto.list().subscribe({
        next: (v) => { 
          console.log(v);
          this.proyecto=v},
        error: (e) => console,
        complete: () => console.info('complete') 
    });
          };
  
        
      
    }
  
        
    
  
    
   