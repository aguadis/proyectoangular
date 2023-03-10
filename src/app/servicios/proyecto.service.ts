import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';



@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  sProyecto: any;
  proyecto: Proyecto[]=[];
  url=  'https://portfolio-cintia-necol.onrender.com/proyecto';
  
 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
    }
    
    public getById(id: number):Observable<Proyecto[]>{
      return this.httpClient.get<Proyecto[]>(this.url + `/${id}`);
    }
    
    public save(proyecto: Proyecto):Observable<Proyecto[]>{
     return this.httpClient.post<any>(this.url, proyecto);
    }
    
    public update(proyecto: Proyecto):Observable<Proyecto[]>{
     return this.httpClient.put<any>(this.url, proyecto);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}

