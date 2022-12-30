import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntroComponent } from '../intro/intro.component';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  sIntro: any;
  intro: any;
  obtenerDatosIntro() {
    this.sIntro.obtenerDatosIntro().subscribe((data: string) =>{
      console.log("Intro" + data);
      
      
        }, (error: any) => console.log(error));
      }
      url= 'http://localhost:8080/'
  
constructor(private httpClient: HttpClient ) { 
  console.log("El servicio esta corriendo");
}

public lista():Observable <IntroComponent[]>{
  return this.httpClient.get<IntroComponent[]>(this.url+'lista');

}

public detail(id:number):Observable<IntroComponent>{

  return this.httpClient.get<IntroComponent>(this.url+ `detail/${id}`);

}
public save(intro:IntroComponent):Observable<any>{
return this.httpClient.post<any>(this.url+ 'create',intro);

}

public update(id:number, intro: IntroComponent):Observable<any>{
return this.httpClient.put<any>(this.url +`update/${id}`,intro)

}
public delete(id :number):Observable<any>{
  return this.httpClient.delete<any>(this.url+ `delete/${id}`);
}
}
