import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../entidades/red';


@Injectable({
  providedIn: 'root'
})
export class RedService {
  sRed: any;
  item: Red[]=[];

  
   url= 'https://portfolio-cintia-necol.onrender.com/red';
  
 constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
    }
    
    public getById(id: number):Observable<Red[]>{
      return this.httpClient.get<Red[]>(this.url + `/${id}`);
    }
    
    public save(red: Red):Observable<Red[]>{
     return this.httpClient.post<any>(this.url, red);
    }
    
    public update(id:number, red: Red):Observable<Red[]>{
     return this.httpClient.put<any>(this.url, red);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}
