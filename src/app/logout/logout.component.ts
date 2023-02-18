import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  modoEdit: any;
  persona: any;
  personaService: any;

  constructor(private autenticacionService:AutenticacionService, private ruta:Router) { }

  ngOnInit(): void {
    this.personaService.verPersonas().subscribe((data: any) =>{
      this.persona = data
    });
    if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }
 }

 cerrarSesion(){
  sessionStorage.setItem('currentUser', "null");
  this.modoEdit = false;
  alert("SESIÓN CERRADA");

  window.sessionStorage.removeItem;
  this.ruta.navigate(['/']);
}

 //onLogOut(): void{
 // this.autenticacionService.logOut()
  //this.ruta.navigate(['/'])
  
//}
}

