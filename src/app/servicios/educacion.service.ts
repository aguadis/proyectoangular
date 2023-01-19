import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Educacion } from '../entidades/educacion';



@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  detail: any;
  crear: any;
  
  onLoadModal() {
    
  }
  
   sEducacion: any;
  educacion: Educacion[]=[];
  url= 'http://localhost:8080/educacion';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
    }
    
    public getById(id: number):Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url+ `/${id}`);
    }
    
    public save(educacion: Educacion):Observable<Educacion[]>{
     return this.httpClient.post<any>(this.url, educacion);
    }
    
    public update(id:number, educacion:Educacion):Observable<Educacion[]>{
     return this.httpClient.put<any>(this.url, educacion);
    }

    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url+ `/${id}`);
    
    }
}




