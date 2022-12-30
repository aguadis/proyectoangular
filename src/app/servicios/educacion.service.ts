import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionComponent } from '../educacion/educacion.component';



@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  sEducacion: any;
  educacion: any;
  obtenerDatosEducacion() {
    this.sEducacion.obtenerDatosEducacion().subscribe((data: string) =>{
      console.log("Educacion" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/educacion/'

  constructor(private httpClient: HttpClient ) { 
    console.log("El servicio esta corriendo");
  }

  public lista():Observable <EducacionComponent[]>{
    return this.httpClient.get<EducacionComponent[]>(this.url+'lista');

  }

  public detail(id:number):Observable<EducacionComponent>{

    return this.httpClient.get<EducacionComponent>(this.url+ `detail/${id}`);

  }
  public save(educacion:EducacionComponent):Observable<any>{
return this.httpClient.post<any>(this.url+ 'create',educacion);

  }

  public update(id:number, educacion: EducacionComponent):Observable<any>{
return this.httpClient.put<any>(this.url +`update/${id}`,educacion)

  }
  public delete(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }
}











