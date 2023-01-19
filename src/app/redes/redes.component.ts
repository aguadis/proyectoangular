import { Component, OnInit } from '@angular/core';
import { Red } from '../entidades/red';
import { RedService } from '../servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
 
  red: any=[]; //se llama al modelo que es un array
  item: Red[]=[];
   RedService: any;
  redes: Red[] | undefined;
  

 
  
 
 constructor(
     //Inyectar el Servicio para tener acceso en la clase a los Métodos
     private sRed:RedService
     ) { }
 
     listarRed(): void{
       this.sRed.list().subscribe(data =>{
         this.red=data;
       });
     }
    
   ngOnInit(): void {
       //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
       this.sRed.list().subscribe({
         next: (v) => { 
           console.log(v);
           this.redes=v},
         error: (e) => console,
         complete: () => console.info('complete') 
     });
           };
   
         
       
     }
   
         
     




