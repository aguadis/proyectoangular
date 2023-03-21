//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../entidades/contacto';
import { Injectable } from '@angular/core';
// esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 
  url = 'https://portfolio-cintia-necol.onrender.com/contacto';
  http: any;

  
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.http.get('/api/contacto');}

  public list(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Contacto>(this.url +  `/${id}`);
    }
    
    public save(contacto: Contacto):Observable<any>{
     return this.httpClient.post<any>(this.url, contacto);
    }
    
    public update(contacto: Contacto):Observable<any>{
     return this.httpClient.put<Contacto>(this.url, contacto);
    }
    
    public delete(id: number):Observable<Contacto>{
     return this.httpClient.delete<any>(this.url +  `/${id}`);
    
    }
}



