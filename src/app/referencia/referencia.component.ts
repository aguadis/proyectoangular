import { Component, OnInit } from '@angular/core';
import { Referencia } from '../entidades/referencia';
import { ReferenciaService } from '../servicios/referencia.service';

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {
  referencia: Referencia[]=[];
  
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private ReferenciaService:ReferenciaService,
  ) { }

  listarReferencia():void{
    this.ReferenciaService.list().subscribe (data=>{
     this.referencia=data;
    });
   }


  ngOnInit(): void {
     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
     this.listarReferencia(); 

         }
 
       
   }