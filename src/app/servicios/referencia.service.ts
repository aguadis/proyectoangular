//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Referencia } from '../entidades/referencia';
import { Injectable } from '@angular/core';
// esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  
 
  url = 'https://portfolio-cintia-necol.onrender.com/referencia';
  http: any;

  
 constructor(private httpClient: HttpClient) { }

 getData() {
  return this.http.get('/api/referencia');}

  public list(): Observable<Referencia[]>{
    return this.httpClient.get<Referencia[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Referencia>(this.url + `/${id}`);
    }
    
    public save(referencia: Referencia):Observable<any>{
     return this.httpClient.post<any>(this.url, referencia);
    }
    
    public update(referencia: Referencia):Observable<any>{
     return this.httpClient.put<Referencia>(this.url, referencia);
    }
    
    public delete(id: number):Observable<Referencia>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
    }
}
