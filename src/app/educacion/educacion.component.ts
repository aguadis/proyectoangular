import { Component, OnInit } from '@angular/core';
import { Educacion } from '../entidades/educacion';
import { EducacionService } from '../servicios/educacion.service';






@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacion: Educacion[]=[]; //se llama al modelo que es un array
  item: any;

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sEducacion:EducacionService
    ) { }
    
    ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.sEducacion.list().subscribe({
        next: (v) => { 
          console.log(v);
          this.educacion=v},
        error: (e) => console,
        complete: () => console.info('complete') 
    });
          };
        
    }