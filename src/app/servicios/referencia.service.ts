import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Referencia } from '../entidades/referencia';


@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  
  sReferencia: any;
  referencia: Referencia[]=[];
  url = 'https://portfolio-cintia-necol.onrender.com/referencia';

  
 constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
    }
    
    public getById(id: number):Observable<Referencia[]>{
      return this.httpClient.get<Referencia[]>(this.url + `/${id}`);
    }
    
    public save(referencia: Referencia):Observable<Referencia[]>{
     return this.httpClient.post<any>(this.url, referencia);
    }
    
    public update(referencia: Referencia):Observable<Referencia[]>{
     return this.httpClient.put<any>(this.url, this.referencia);
    }
    
    public delete(id: number):Observable<any>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}
