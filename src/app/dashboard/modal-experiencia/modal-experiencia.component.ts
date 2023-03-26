import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
  item: Experiencia[] = [];
  id?:number;
  experiencia: any;

 constructor(
  //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) {
    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      trabajo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      id: [''],
      })
   }
  ngOnInit(): void {
    this.cargarExperiencia();
  }
  
  onLoadModal(item:any){
    this.form.get("trabajo")?.setValue(item.trabajo);
    this.form.get("inicio")?.setValue(item.inicio);
    this.form.get("puesto")?.setValue(item.puesto);
    this.form.get("id")?.setValue(item.id);
  }
  
   
  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe(
      data => {
        this.experiencia = data;
  }
    )
  }
  cargarDetalle(id: number){
    this.sExperiencia.getById(id).subscribe(
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
    let experiencia = this.form.value;
    console.log()
    if (experiencia.id == '') {
      this.sExperiencia.save(experiencia).subscribe(
        (      data: any) => {
  alert("Su nueva Educación fue añadida correctamente");
          this.cargarExperiencia();
          this.form.reset();
        }
      )
    } else {
      this.sExperiencia.save(experiencia).subscribe(
        (      data: any) => {
          alert("Experiencia editada!");
          this.cargarExperiencia();
          this.form.reset();
        }
      )
    }
  }
      
    borrar(id: number): void {
      if (confirm('¿Está seguro que desea eliminar este elemento?')) {
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
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
  
  
 



 
   
