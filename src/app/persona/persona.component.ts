import { Component, OnInit } from '@angular/core';
import { Persona } from '../entidades/persona';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {
  persona: Persona[]=[]; //se llama al modelo que es un array
  item: any;
  listarpersona: any;
  _console: Console;
  private _findOriginalError: any;

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sPersona:PersonaService
    ) { this._console = console; }

    handleError(error: any) {
      const originalError = this._findOriginalError(error);
      this._console
      //.error('ERROR', error);
      if (originalError) {
          this._console.error('ORIGINAL ERROR', originalError);
      }
  }
    
    ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
     
      
        
    }

  }
 
  
 
       
   
  
 
 
   
  
   
   




