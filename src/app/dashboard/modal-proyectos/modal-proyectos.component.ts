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
  
  form: FormGroup;
  item: Proyecto[] = [];
  id?:number;
  proyecto:any;
   
  constructor(private formBuilder: FormBuilder, private sProyecto: ProyectoService) {

    this.form = this.formBuilder.group({
      trabajo: ['', [Validators.required]],
      img: ['', [Validators.required]],
      id: [''],
      })
   }

    
  ngOnInit(): void {
    this.cargarProyecto();
  }

  onLoadModal(item:any){
    this.form.get("trabajo")?.setValue(item.trabajo);
    this.form.get("img")?.setValue(item.img);
    this.form.get("id")?.setValue(item.id);
  }

  cargarProyecto(): void {
    this.sProyecto.list().subscribe(
      data => {
        this.proyecto = data;
  }
    )
  }

  cargarDetalle(id: number){
    this.sProyecto.getById(id).subscribe(
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

  guardar() {
    console.log("FUNCIONA!!!")
    let proyecto = this.form.value;
    console.log()
    if (proyecto.id == '') {
      this.sProyecto.save(proyecto).subscribe(
        (      data: any) => {
  alert("Su nueva proyecto fue añadido correctamente");
          this.cargarProyecto();
          this.form.reset();
        }
      )
    } else {
      this.sProyecto.save(proyecto).subscribe(
        (      data: any) => {
          alert("Proyecto editado!");
          this.cargarProyecto();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number): void {
    
  if (confirm('¿Está seguro que desea eliminar este elemento?')) {
    this.sProyecto.delete(id).subscribe(
      data => {
        this.cargarProyecto();
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
      

  

    
  

 


  





