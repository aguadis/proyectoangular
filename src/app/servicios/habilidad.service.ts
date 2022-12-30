import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadComponent } from '../habilidad/habilidad.component';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  sHabilidad: any;
  habilidad: any;
  obtenerDatosHabilidad() {
    this.sHabilidad.obtenerDatosHabilidad().subscribe((data: string) =>{
      console.log("Habilidad" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/habilidad/'

  constructor(private httpClient:HttpClient) { }

public list(): Observable<HabilidadComponent[]> {
 return this.httpClient.get<any[]>(this.url + 'lista');
}

public getById(id: number):Observable<HabilidadComponent>{
 return this.httpClient.get<HabilidadComponent>(this.url + 'detail/${id}');
}

public save(habilidad: HabilidadComponent):Observable<any>{
 return this.httpClient.post<any>(this.url + 'create', habilidad);
}

public update(id: number, habilidad: HabilidadComponent):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update/${id}', habilidad);
}

public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'delete/${id}');
}

}
