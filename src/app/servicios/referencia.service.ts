import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Referencia } from '../entidades/referencia';


@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  url= 'http://localhost:8080/referencia';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Referencia[]>{
    return this.httpClient.get<Referencia[]>(this.url);
    }
    
    public getById(id: number):Observable<Referencia>{
      return this.httpClient.get<Referencia>(this.url + '/${id}');
    }
    
    public save(referencia: Referencia):Observable<any>{
     return this.httpClient.post<any>(this.url, referencia);
    }
    
    public update(referencia: Referencia):Observable<any>{
     return this.httpClient.post<any>(this.url, referencia);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + '/${id}');
    
    }
}
