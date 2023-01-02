import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProyectosComponent } from '../proyectos/proyectos.component';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  sProyectos: any;
  proyectos: any;
  obtenerDatosProyectos() {
    this.sProyectos.obtenerDatosProyectos().subscribe((data: string) =>{
      console.log("Proyectos" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/proyecto/'

  constructor(private httpClient: HttpClient) { console.log("El servicio esta corriendo"); }
  //public list(): Observable<ProyectosComponent[]>{
   // return this.httpClient.get<ProyectosComponent[]>(this.url + 'lista');
    //}
    
   // public getById(id: number):Observable<ProyectosComponent>{
    //  return this.httpClient.get<ProyectosComponent>(this.url + 'detail/${id}');
    //}
    
    //public save(proyectos: ProyectosComponent):Observable<any>{
      //return this.httpClient.post<any>(this.url + 'create', proyectos);
    //}
    
    //public update(id: number, proyectos: ProyectosComponent):Observable<any>{
     // return this.httpClient.put<any>(this.url + 'update/${id}', proyectos);
    //}
    
    //public delete(id: number):Observable<any>{
     // return this.httpClient.delete<any>(this.url + 'delete/${id}');
    //}

}
