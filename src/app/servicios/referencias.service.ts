import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenciasComponent } from '../referencias/referencias.component';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {
  sReferencias: any;
  referencias: any;
  obtenerDatosReferencias() {
    this.sReferencias.obtenerDatosReferencias().subscribe((data: string) =>{
      console.log("Referencias" + data);
      
      
        }, (error: any) => console.log(error));
      
  }

  url= 'http://localhost:8080/referencia/'

  constructor(private httpClient:HttpClient) { }

public list(): Observable<ReferenciasComponent[]> {
 return this.httpClient.get<any[]>(this.url + 'lista');
}

public getById(id: number):Observable<ReferenciasComponent>{
 return this.httpClient.get<ReferenciasComponent>(this.url + 'detail/${id}');
}

public save(referencias: ReferenciasComponent):Observable<any>{
 return this.httpClient.post<any>(this.url + 'create', referencias);
}

public update(id: number, referencias: ReferenciasComponent):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update/${id}', referencias);
}

public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'delete/${id}');
}
 
}
