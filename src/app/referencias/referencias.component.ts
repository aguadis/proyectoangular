import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {
//inicializar variables de instancia 
id1: string = '';
ref1: string = '';

id2: string = '';
ref2: string = '';

id3: string = '';
ref3: string = '';



  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.proyectoService.getDatos().subscribe(referencias => {
      console.log(referencias);
       //Definir infomación a mostrar
        this.id1=referencias.id1;
        this.ref1=referencias.ref1;
        
        this.id2=referencias.id2;
        this.ref2=referencias.ref2;
        
        this.id3=referencias.id3;
        this.ref3=referencias.ref3;
        
        
      });
  }

}
