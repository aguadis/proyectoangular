import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  
  form: FormGroup;
  item: Educacion[] = [];
  educacion: any;
 id?:number;
   
  //inicializar variables de instancia
  
constructor(
//Inyectar el Servicio para tener acceso en la clase a los Métodos
private formBuilder: FormBuilder, private sEducacion: EducacionService) {
  //Creamos el grupo de controles para el formulario 
  
  this.form = this.formBuilder.group({
    nivel: ['', [Validators.required]],
    inicio: ['', [Validators.required]],
    fin: ['', [Validators.required]],
    estudio: ['', [Validators.required]],
    id: [''],
    })
 }
ngOnInit(): void {
  this.cargarEducacion();
}

onLoadModal(item:any){
  this.form.get("nivel")?.setValue(item.nivel);
  this.form.get("inicio")?.setValue(item.inicio);
  this.form.get("fin")?.setValue(item.fin);
  this.form.get("estudio")?.setValue(item.estudio);
  this.form.get("id")?.setValue(item.id);
}

 
cargarEducacion(): void {
  this.sEducacion.list().subscribe(
    data => {
      this.educacion = data;
}
  )
}
cargarDetalle(id: number){
  this.sEducacion.getById(id).subscribe(
    {
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => {
        console.error(e)
        alert("error al modificar")
      },
      complete: () => console.info('complete aqui')
    }
  )
}
//👇 esto es solo para hacer pruebas en local


guardar() {
  console.log("FUNCIONA!!!")
  let educacion = this.form.value;
  console.log()
  if (educacion.id == '') {
    this.sEducacion.save(educacion).subscribe(
      (      data: any) => {
alert("Su nueva Educación fue añadida correctamente");
        this.cargarEducacion();
        this.form.reset();
      }
    )
  } else {
    this.sEducacion.save(educacion).subscribe(
      (      data: any) => {
        alert("Educacion editada!");
        this.cargarEducacion();
        this.form.reset();
      }
    )
  }
}
    
  borrar(id: number): void {
    if (confirm('¿Está seguro que desea eliminar este elemento?')) {
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  reset(): void {
    this.form.reset();
    this.form.get('id')?.setValue('');
  }

}

    










