import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesComponent } from '../redes/redes.component';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  sRed: any;
  red: any;

  obtenerDatosRedes() {
    this.sRed.obtenerDatosRedes().subscribe((data: string) =>{
      console.log("Redes" + data);
      
      
        }, (error: any) => console.log(error));
      }
  url= 'http://localhost:8080/red/'
  
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<RedesComponent[]> {
   return this.httpClient.get<any[]>(this.url + 'lista');
  }
  
  public getById(id: number):Observable<RedesComponent>{
   return this.httpClient.get<RedesComponent>(this.url + 'detail/${id}');
  }
  
  public save(redes: RedesComponent):Observable<any>{
   return this.httpClient.post<any>(this.url + 'create', this.red);
  }
  
  public update(id: number, red: RedesComponent):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update/${id}', this.red);
  }
  
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + 'delete/${id}');
  }
}