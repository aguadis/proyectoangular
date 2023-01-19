import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url='http://localhost:8080/login';
  currentUserSubjet: BehaviorSubject<any>;
    autenticacionUser: any;
    id: any;
  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
   }

   login(credenciales:any): Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this.http.post(this.url, credenciales,httpOptions).pipe(map(data=> {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      
        this.currentUserSubjet.next(data);
      return data;
    }));

   }

   get UsuarioAutenticado (){
     return this.currentUserSubjet.value;
   }
   logOut():void{
    window.sessionStorage.clear();
  }
}
