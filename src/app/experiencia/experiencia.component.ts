import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../entidades/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  
  //inicializar variables de instancia 

 experiencia: any=[]; //se llama al modelo que es un array
 item: Experiencia[]=[];
  ExperienciaService: any;
  listarExperiencia: any;

 

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sExperiencia:ExperienciaService
    ) { }

    listarExperiencias(): void{
      this.sExperiencia.list().subscribe(data =>{
        this.experiencia=data;
      });
    }
   
  ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.sExperiencia.list().subscribe({
        next: (v) => { 
          console.log(v);
          this.experiencia=v},
        error: (e) => console,
        complete: () => console.info('complete') 
    });
          };
  
        
      
    }
  
        
    
  
    
   
  
  
  

