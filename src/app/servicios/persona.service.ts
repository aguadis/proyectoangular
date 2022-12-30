import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaComponent } from '../persona/persona.component';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  sPersona: any;
  persona: any;
  obtenerDatosPersona() {
    this.sPersona.obtenerDatosPersona().subscribe((data: string) =>{
      console.log("Persona" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/persona/'

  constructor(private httpClient: HttpClient ) { 
    console.log("El servicio esta corriendo");
  }

  public lista():Observable <PersonaComponent[]>{
    return this.httpClient.get<PersonaComponent[]>(this.url+'lista');

  }

  public detail(id:number):Observable<PersonaComponent>{

    return this.httpClient.get<PersonaComponent>(this.url+ `detail/${id}`);

  }
  public save(persona:PersonaComponent):Observable<any>{
return this.httpClient.post<any>(this.url+ 'create',persona);

  }

  public update(id:number, persona: PersonaComponent):Observable<any>{
return this.httpClient.put<any>(this.url +`update/${id}`,this.persona)

  }
  public delete(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }
}

