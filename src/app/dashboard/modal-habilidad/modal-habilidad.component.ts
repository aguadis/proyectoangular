import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';



@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['./modal-habilidad.component.css']
})
export class ModalHabilidadComponent implements OnInit {
  
  form: FormGroup;
  item: Habilidad[] = [];
  id?:number;
  habilidad: any;
  
  //Inyectar el Servicio para tener acceso en la clase a los Métodos
constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService) {
  
 this.form = this.formBuilder.group({
  habilidad: ['', [Validators.required]],
  porcentaje: ['', [Validators.required]],
  color: ['', [Validators.required]],
  id: [''],
  })
}

ngOnInit(): void {
  this.cargarHabilidad();
}
 
onLoadModal(item:any){
  this.form.get("habilidad")?.setValue(item.habilidad);
  this.form.get("porcentaje")?.setValue(item.porcentaje);
  this.form.get("color")?.setValue(item.color);
  this.form.get("id")?.setValue(item.id);
}
 
cargarHabilidad(): void {
  this.sHabilidad.list().subscribe(
    data => {
      this.habilidad = data;
}
  )
}

cargarDetalle(id: number){
  this.sHabilidad.getById(id).subscribe(
    {
      next: (data: { [key: string]: any; }) => {
        this.form.patchValue(data);
      },
      error: (e: any) => {
        console.error(e)
        alert("error al modificar")
      },
      complete: () => console.info('complete aqui')
    }
  )
}

guardar() {
  console.log("FUNCIONA!!!")
  let habilidad = this.form.value;
  console.log()
  if (this.habilidad.id == '') {
    this.sHabilidad.save(habilidad).subscribe(
      (      data: any) => {
alert("Su nueva habilidad fue añadida correctamente");
        this.cargarHabilidad();
        this.form.reset();
      }
    )
  } else {
    this.sHabilidad.save(this.habilidad).subscribe(
      (      data: any) => {
        alert("Habilidad editada!");
        this.cargarHabilidad();
        this.form.reset();
      }
    )
  }
}
    
borrar(id: number) {
  this.sHabilidad.delete(id).subscribe(
db => {
  alert("se pudo eliminar satisfactoriamente")
  this.cargarHabilidad();
},
error => {
alert("No se pudo eliminar")
})
}

}