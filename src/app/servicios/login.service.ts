import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sLogin: any;
  login: any;
  obtenerDatosLogin() {
    this.sLogin.obtenerDatosLogin().subscribe((data: string) =>{
      console.log("Login" + data);
      
      
        }, (error: any) => console.log(error));
      
  }
  url= 'http://localhost:8080/login/'

  constructor(private httpClient:HttpClient) { }

public list(): Observable<LoginComponent[]> {
 return this.httpClient.get<any[]>(this.url + 'lista');
}

public getById(id: number):Observable<LoginComponent>{
 return this.httpClient.get<LoginComponent>(this.url + 'detail/${id}');
}

public save(login: LoginComponent):Observable<any>{
 return this.httpClient.post<any>(this.url + 'create', login);
}

public update(id: number, login: LoginComponent):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update/${id}', login);
}

public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'delete/${id}');
}

}
