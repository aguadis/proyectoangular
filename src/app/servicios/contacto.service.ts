import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoComponent } from '../contacto/contacto.component';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  sContacto: any;
  contacto: any;
  obtenerDatosContacto() {
    this.sContacto.obtenerDatosContacto().subscribe((data: string) =>{
      console.log("Contacto" + data);
    }, (error: any) => console.log(error));
      
  }

  url= 'http://localhost:8080/contacto/'

  constructor(private httpClient:HttpClient) { }

public list(): Observable<ContactoComponent[]> {
 return this.httpClient.get<any[]>(this.url + 'lista');
}

public getById(id: number):Observable<ContactoComponent>{
 return this.httpClient.get<ContactoComponent>(this.url + 'detail/${id}');
}

public save(contacto: ContactoComponent):Observable<any>{
 return this.httpClient.post<any>(this.url + 'create', contacto);
}

public update(id: number, contacto: ContactoComponent):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update/${id}', contacto);
}

public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'delete/${id}');
}


}
