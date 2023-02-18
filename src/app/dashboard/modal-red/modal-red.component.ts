import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/entidades/red';
import { RedService } from 'src/app/servicios/red.service';



@Component({
  selector: 'app-modal-red',
  templateUrl: './modal-red.component.html',
  styleUrls: ['./modal-red.component.css']
})
export class ModalRedComponent implements OnInit {
  form: FormGroup;
  item: Red[]=[];
  id?:number;
  redes: any;
  
 
  constructor(private formBuilder: FormBuilder, private sRed:RedService){
//Creamos el grupo de controles para el formulario 

this.form = this.formBuilder.group({
  clase: ['', [Validators.required]],
  red: ['', [Validators.required]],
  id: [''],
})

  }
  ngOnInit(): void {
   this.cargarRedes();
  }

  onLoadModal(item:any){
    this.form.get("clase")?.setValue(item.clase);
    this.form.get("red")?.setValue(item.red);
    this.form.get("id")?.setValue(item.id);
  }

  cargarRedes(): void {
    this.sRed.list().subscribe(
      data => {
        this.redes = data;
      }
    )
  }
  
  cargarDetalle(id: number) {
    this.sRed.getById(id).subscribe(
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
    let redes = this.form.value;
    console.log()
    if (redes.id == '') {
      this.sRed.save(redes).subscribe(
        (      data: any) => {
  alert("Su nueva Red fue añadida correctamente");
          this.cargarRedes();
          this.form.reset();
        }
      )
    } else {
      this.sRed.save(redes).subscribe(
        (      data: any) => {
          alert("Red editada!");
          this.cargarRedes();
          this.form.reset();
        }
      )
    }
  }
      
  borrar(id: number) {
    this.sRed.delete(id).subscribe(
  db => {
    alert("se pudo eliminar satisfactoriamente")
    this.cargarRedes();
  },
  error => {
  alert("No se pudo eliminar")
  })
  }

 }
   

  
  



