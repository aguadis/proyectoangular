import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Referencia } from 'src/app/entidades/referencia';
import { ReferenciaService } from 'src/app/servicios/referencia.service';

@Component({
  selector: 'app-modal-referencias',
  templateUrl: './modal-referencias.component.html',
  styleUrls: ['./modal-referencias.component.css']
})
export class ModalReferenciasComponent implements OnInit {

  form: FormGroup;
  item: Referencia[] = [];
  id?:number;
  referencia: any;
 
 

 constructor(
  //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private formBuilder: FormBuilder, private sReferencia: ReferenciaService) {
    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
      id: [''],
      })
   }
  ngOnInit(): void {
    this.cargarReferencia();
  }
 
  
  onLoadModal(item:any){
    this.form.get("nombre")?.setValue(item.nombre);
    this.form.get("apellido")?.setValue(item.apellido);
    this.form.get("cargo")?.setValue(item.cargo);
    this.form.get("contacto")?.setValue(item.contacto);
    this.form.get("id")?.setValue(item.id);
  }
  
   
  cargarReferencia(): void {
    this.sReferencia.list().subscribe(
      data => {
        this.referencia = data;
  }
    )
  }
  cargarDetalle(id: number){
    this.sReferencia.getById(id).subscribe(
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
    let referencia = this.form.value;
    console.log()
    if (referencia.id == '') {
      this.sReferencia.save(referencia).subscribe(
        (      data: any) => {
  alert("Su nueva Educación fue añadida correctamente");
          this.cargarReferencia();
          this.form.reset();
        }
      )
    } else {
      this.sReferencia.save(referencia).subscribe(
        (      data: any) => {
          alert("Referencia editada!");
          this.cargarReferencia();
          this.form.reset();
        }
      )
    }
  }
      
    borrar(id: number) {
    this.sReferencia.delete(id).subscribe(
  db => {
    alert("se pudo eliminar satisfactoriamente")
    this.cargarReferencia();
  },
  error => {
  alert("No se pudo eliminar")
  })
  }
  
  }

