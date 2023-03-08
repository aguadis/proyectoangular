import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  sHabilidad: any;
  habilidad: Habilidad[]=[];
  url= 'https://portfolio-cintia-necol.onrender.com/habilidad';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
    }
    
    public getById(id: number):Observable<Habilidad[]>{
      return this.httpClient.get<Habilidad[]>(this.url + `/${id}`);
    }
    
    public save(habilidad: Habilidad):Observable<Habilidad[]>{
     return this.httpClient.post<any>(this.url, habilidad);
    }
    
    public update(habilidad: Habilidad):Observable<Habilidad[]>{
     return this.httpClient.put<any>(this.url, habilidad);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
   }
}
