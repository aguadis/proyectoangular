import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenciasComponent } from '../referencias/referencias.component';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {
  sReferencias: any;
  referencias: any;
  obtenerDatosReferencias() {
    this.sReferencias.obtenerDatosReferencias().subscribe((data: string) =>{
      console.log("Referencias" + data);
      
      
        }, (error: any) => console.log(error));
      
  }

  url= 'http://localhost:8080/referencia/'

  constructor(private httpClient:HttpClient) {  console.log("El servicio esta corriendo");}


}
