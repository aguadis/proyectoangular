import { Injectable } from '@angular/core';
//Esto es para poder hacer peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = 'https://portfolio-cintia-necol.onrender.com/login';
  
  currentUserSubjet: BehaviorSubject<any>;
  
    
  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
   }

   getData() {
    return this.http.get('/api/login');}

   login(credenciales:any): Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this.http.post<any>(this.url, credenciales,httpOptions).pipe(map(data=> {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      
        this.currentUserSubjet.next(data);
        console.log("Servicio esta corriendo" + JSON.stringify(data));
      return data;
    }));

   }

   get UsuarioAutenticado (){
     return this.currentUserSubjet.value;
   }
   
}

