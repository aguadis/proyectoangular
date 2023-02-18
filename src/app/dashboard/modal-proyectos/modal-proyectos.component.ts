import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  proyecto:any;
  form: FormGroup;
  item: Proyecto[] = [];
  id?:number;
  
   
  constructor(private formBuilder: FormBuilder, private sProyecto: ProyectoService) {

    this.form = this.formBuilder.group({
      trabajo: ['', [Validators.required]],
      img: [''],
      id: [''],
      })
   }

    
  ngOnInit(): void {
    this.cargarProyectos();
  }

  onLoadModal(item:any){
    this.form.get("trabajo")?.setValue(item.trabajo);
    this.form.get("img")?.setValue(item.img);
    this.form.get("id")?.setValue(item.id);
  }

  cargarProyectos(): void {
    this.sProyecto.list().subscribe(
      data => {
        this.proyecto = data;
  }
    )
  }

  cargarDetalle(id: number){
    this.sProyecto.getById(id).subscribe(
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
    let proyectos = this.form.value;
    console.log()
    if (this.proyecto.id == '') {
      this.sProyecto.save(proyectos).subscribe(
        (      data: any) => {
  alert("Su nueva Educación fue añadida correctamente");
          this.cargarProyectos();
          this.form.reset();
        }
      )
    } else {
      this.sProyecto.save(proyectos).subscribe(
        (      data: any) => {
          alert("Educacion editada!");
          this.cargarProyectos();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.sProyecto.delete(id).subscribe(
  db => {
    alert("se pudo eliminar satisfactoriamente")
    this.cargarProyectos();
  },
  error => {
  alert("No se pudo eliminar")
  })
  }
  

}
      

  

    
  

 


  





