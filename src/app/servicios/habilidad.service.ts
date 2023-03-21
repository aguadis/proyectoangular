//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Habilidad } from '../entidades/habilidad';
import { Injectable } from '@angular/core';
// esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  
  url = 'https://portfolio-cintia-necol.onrender.com/habilidad';
  http: any;

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.http.get('/api/habilidad');}

  public list(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Habilidad>(this.url + `/${id}`);
    }
    
    public save(habilidad: Habilidad):Observable<any>{
     return this.httpClient.post<any>(this.url, habilidad);
    }
    
    public update(habilidad: Habilidad):Observable<any>{
     return this.httpClient.put<any>(this.url, habilidad);
    }
    
    public delete(id: number):Observable<Habilidad>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
   }
}
