import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';




@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  educacion:any;
  form:FormGroup;
  id?:number;

  //inicializar variables de instancia
  
      
      
      
  constructor(
//Inyectar el Servicio para tener acceso en la clase a los Métodos
 private sEducacion:EducacionService, private formBuilder: FormBuilder, private formGroup: FormGroup) {
  
  this.form= this.formBuilder.group({
   nivel:['',[Validators.required]],
   inicio:['',[Validators.required]],
   fin:['',[Validators.required]],
   estudio:['',[Validators.required]],
   id:['']
  })
 }


 ngOnInit(): void {
  
     
  }
    


onLoadModal(educacion:any) {

this.form.get("inicio")?.setValue(this.educacion.inicio);
this.form.get("fin")?.setValue(this.educacion.fin);
this.form.get("estudio")?.setValue(this.educacion.estudio);
this.form.get("id")?.setValue(this.educacion.id);
}



guardarEducacion() {
  alert("Registro a modificar " + this.form.get("id")?.value);
  // llamar al servicio y enviar los datos
}

eliminarEducacion(id:number ){
  alert( "El registro a eliminar es: " + id);
}


}



