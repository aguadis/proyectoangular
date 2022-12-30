import { Component, Input, OnInit } from '@angular/core';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  educacion:any;
  form:FormGroup;
  id?:number;
  experiencia: any;
  habilidad: any;


  
  
 
constructor(
//Inyectar el Servicio para tener acceso en la clase a los Métodos
private sExperiencia:ExperienciaService, private formBuilder: FormBuilder, private formGroup: FormGroup) {
 
 this.form= this.formBuilder.group({
  trabajo:['',[Validators.required]],
  inicio:['',[Validators.required]],
  puesto:['',[Validators.required]],
  id:['']
 })
}


ngOnInit(): void {
 
    
 }
   


onLoadModal(experiencia:any) {

  this.form.get("trabajo")?.setValue(this.habilidad.trabajo);
  this.form.get("inicio")?.setValue(this.habilidad.inicio);
  this.form.get("puesto")?.setValue(this.habilidad.puesto);
  this.form.get("id")?.setValue(this.habilidad.id);
  
  
}



guardarExperiencia() {
 alert("Registro a modificar " + this.form.get("id")?.value);
 // llamar al servicio y enviar los datos
}

eliminarExperiencia(id:number ){
 alert( "El registro a eliminar es: " + id);
}

}
 
   
