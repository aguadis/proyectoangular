import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contacto.service';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto: Contacto[]=[];
  
 
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private ContactoService:ContactoService,
    ) { }
    
    listarContacto():void{
     this.ContactoService.list().subscribe ((data: Contacto[])=>{
      this.contacto=data;
     });
    }


   ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.listarContacto(); 
 
          }
  
        
    }
  