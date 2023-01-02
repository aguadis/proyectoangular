import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesComponent } from '../redes/redes.component';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  sRed: any;
  red: any;

  obtenerDatosRedes() {
    this.sRed.obtenerDatosRedes().subscribe((data: string) =>{
      console.log("Redes" + data);
      
      
        }, (error: any) => console.log(error));
      }
  url= 'http://localhost:8080/red/'
  
  constructor(private httpClient:HttpClient) { console.log("El servicio esta corriendo"); }

  
}