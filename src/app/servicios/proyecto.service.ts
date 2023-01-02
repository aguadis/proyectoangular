import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asíncronica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  sProyecto: any;
  proyecto: any;
  obtenerDatosProyecto() {
    this.sProyecto.obtenerDatosProyecto().subscribe((data: string) =>{
      console.log("Proyecto" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/proyecto/'

  constructor(private httpClient: HttpClient ) { 
    console.log("El servicio esta corriendo");
  }

  
}
