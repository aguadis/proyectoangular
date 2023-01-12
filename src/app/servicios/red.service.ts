import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../entidades/red';


@Injectable({
  providedIn: 'root'
})
export class RedService {
  
  url= 'http://localhost:8080/red';
  
  //constructor(private httpClient:HttpClient) { console.log("El servicio esta corriendo"); }
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url);
    }
    
    public getById(id: number):Observable<Red>{
      return this.httpClient.get<Red>(this.url + '/${id}');
    }
    
    public save(red: Red):Observable<any>{
     return this.httpClient.post<any>(this.url, red);
    }
    
    public update(red: Red):Observable<any>{
     return this.httpClient.post<any>(this.url, red);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + '/${id}');
    
    }
}

  
