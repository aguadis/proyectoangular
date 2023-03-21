//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entidades/persona';
import { Injectable } from '@angular/core';
// esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  
  
  url = 'https://portfolio-cintia-necol.onrender.com/persona';
  http: any;
     
  
 constructor(private httpClient: HttpClient) { }

 getData() {
  return this.http.get('/api/persona');}

  public list(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Persona>(this.url + `/${id}`);
    }
    
    public save(persona: Persona):Observable<any>{
     return this.httpClient.post<any>(this.url, persona);
    }
    
    public update(persona: Persona):Observable<any>{
     return this.httpClient.put<Persona>(this.url, persona);
    }
    
    public delete(id: number):Observable<Persona>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
  
  
    
   
}
