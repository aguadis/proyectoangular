import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaComponent } from '../persona/persona.component';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  sPersona: any;
  persona: any;
  obtenerDatosPersona() {
    this.sPersona.obtenerDatosPersona().subscribe((data: string) =>{
      console.log("Persona" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/persona/'

  constructor(private httpClient: HttpClient ) { 
    console.log("El servicio esta corriendo");
  }

  
}

