import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  proyectos:any;
  form: FormGroup;
  id?:number;

  constructor(
    private sProyecto:ProyectoService, private formBuilder: FormBuilder, private formGroup: FormGroup) {
  
      this.form= this.formBuilder.group({
      img:['',[Validators.required]],
      trabajo:['',[Validators.required]],
      id:['']
     })
   }

  ngOnInit(): void {

  }

    onLoadModal(proyectos:any) {
      this.form.get("img")?.setValue(this.proyectos.img);
      this.form.get("trabajo")?.setValue(this.proyectos.trabajo);
      this.form.get("id")?.setValue(this.proyectos.id);
      }
  

  guardarProyectos() {
    alert("Registro a modificar " + this.form.get("id")?.value);
    // llamar al servicio y enviar los datos
  }

  eliminarProyectos(id:number ){
    alert( "El registro a eliminar es: " + id);
  }

}

  




function onLoadModal(proyectos: any, any: any) {
  
}

function guardarProyectos() {
  
}

