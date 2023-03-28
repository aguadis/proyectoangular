
//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../entidades/proyecto';
import { Injectable } from '@angular/core';
// esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'https://portfolio-cintia-necol.onrender.com/proyecto';
  http: any;
  
 

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.http.get('/api/proyecto');}

  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Proyecto>(this.url + `/${id}`);
    }
    
    public save(proyecto: Proyecto):Observable<any>{
     return this.httpClient.post<any>(this.url, proyecto);
    }
    
    public update(proyecto: Proyecto):Observable<any>{
     return this.httpClient.put<Proyecto>(this.url, proyecto);
    }
    
    public delete(id: number):Observable<Proyecto>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}




  
  
  
