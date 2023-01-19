import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private autenticacionService:AutenticacionService, private ruta:Router) { }

  ngOnInit(): void {
 }

 onLogOut(): void{
  this.autenticacionService.logOut()
  this.ruta.navigate(['/'])
  
}
}

