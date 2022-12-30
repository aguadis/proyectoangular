import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/servicios/habilidad.service';


@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['./modal-habilidad.component.css']
})
export class ModalHabilidadComponent implements OnInit {
  habilidad:any;
  form:FormGroup;
  id?:number;


  //inicializar variables de instancia
  
      
      
      
  constructor(
//Inyectar el Servicio para tener acceso en la clase a los Métodos
 private sHabilidad:HabilidadService, private formBuilder: FormBuilder, private formGroup: FormGroup) {
  
  this.form= this.formBuilder.group({
   habilidad:['',[Validators.required]],
   porcentaje:['',[Validators.required]],
   color:['',[Validators.required]],
   id:['']
  })
 }


 ngOnInit(): void {
  
     
  }
    


onLoadModal(habilidad:any) {
this.form.get("habilidad")?.setValue(this.habilidad.habilidad);
this.form.get("porcentaje")?.setValue(this.habilidad.porcentaje);
this.form.get("color")?.setValue(this.habilidad.color);
this.form.get("id")?.setValue(this.habilidad.id);
}

guardarHabilidad() {
  alert("Registro a modificar " + this.form.get("id")?.value);
  // llamar al servicio y enviar los datos
}

eliminarHabilidad(id:number ){
  alert( "El registro a eliminar es: " + id);
}


}

    


