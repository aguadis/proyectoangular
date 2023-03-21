//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../entidades/educacion';
import { Injectable } from '@angular/core';
// esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 
  url = 'https://portfolio-cintia-necol.onrender.com/educacion';
  http: any;

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.http.get('/api/educacion');}

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Educacion>(this.url+ `/${id}`);
    }
    
    public save(educacion: Educacion):Observable<any>{
     return this.httpClient.post<any>(this.url, educacion);
    }
    
    public update(educacion: Educacion):Observable<any>{
     return this.httpClient.put<Educacion>(this.url, educacion);
    }

    public delete(id: number):Observable<Educacion>{
     return this.httpClient.delete<any>(this.url+ `/${id}`);
    
    }
}




