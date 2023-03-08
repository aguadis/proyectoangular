import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contacto } from '../entidades/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  sContacto: any;
  contacto: Contacto[]=[];

  url= 'https://portfolio-cintia-necol.onrender.com/contacto';

  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.url);
    }
    
    public getById(id: number):Observable<Contacto[]>{
      return this.httpClient.get<Contacto[]>(this.url +  `/${id}`);
    }
    
    public save(contacto: Contacto):Observable<Contacto[]>{
     return this.httpClient.post<any>(this.url, contacto);
    }
    
    public update(contacto: Contacto):Observable<Contacto[]>{
     return this.httpClient.put<any>(this.url, contacto);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url +  `/${id}`);
    
    }
}



