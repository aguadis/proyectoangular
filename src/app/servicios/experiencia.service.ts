import { Injectable } from '@angular/core';
// es para suscribirse y que se reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  sExperiencia: any;
  experiencia: Experiencia[]=[];
    
url= 'http://localhost:8080/experiencia';
  
 constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
    }
    
    public getById(id: number):Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.url+ `/${id}`);
    }
    
    public save(experiencia: Experiencia):Observable<Experiencia[]>{
     return this.httpClient.post<any>(this.url, experiencia);
    }
    
    public update(id:number, experiencia: Experiencia):Observable<Experiencia[]>{
     return this.httpClient.put<any>(this.url, experiencia);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}
