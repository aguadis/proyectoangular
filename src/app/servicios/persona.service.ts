import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  sPersona: any;
  persona: any;
   url= 'http://localhost:8080/persona'
  
 constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<Persona[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Persona[]>(this.url + '/${id}');
    }
    
    public save(persona: Persona):Observable<any>{
     return this.httpClient.post<any>(this.url, persona);
    }
    
    public update(persona: Persona):Observable<any>{
     return this.httpClient.post<any>(this.url, persona);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + '/${id}');
    
    }
  
  
    
   
}
