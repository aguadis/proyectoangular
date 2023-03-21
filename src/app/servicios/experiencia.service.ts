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
  url = 'https://portfolio-cintia-necol.onrender.com/experiencia';
  http: any;
  
 constructor(private httpClient: HttpClient) { }

 getData() {
  return this.http.get('/api/experiencia');}

  public list(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Experiencia>(this.url+ `/${id}`);
    }
    
    public save(experiencia: Experiencia):Observable<any>{
     return this.httpClient.post<any>(this.url, experiencia);
    }
    
    public update( experiencia: Experiencia):Observable<any>{
     return this.httpClient.put<Experiencia>(this.url, experiencia);
    }
    
    public delete(id: number):Observable<Experiencia>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}
