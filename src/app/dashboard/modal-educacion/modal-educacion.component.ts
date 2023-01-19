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
    
  borrar(id: number) {
  this.sEducacion.delete(id).subscribe(
db => {
  alert("se pudo eliminar satisfactoriamente")
  this.cargarEducacion();
},
error => {
alert("No se pudo eliminar")
})
}

}

    










//guardarEducacion() {
  
  
  //let estudio = this.form.value;

 // if (estudio.id == '') {
    //this.sEducacion.save(estudio).subscribe(
     // data => {
        //alert("Su nueva Educación fue añadida correctamente");
        //this.cargarEducacion();
        //this.form.reset();
      //},
     // error => {
        //alert("Su nueva Educación fue añadida correctamente");
        //this.cargarEducacion();
        //this.form.reset();
        
     // }
    //)
 // } else {
  //  this.sEducacion.update(estudio.id, estudio).subscribe(
    //  data => {
      //  alert('Educación editada correctamente');
      ///  this.cargarEducacion();
       // this.form.reset();
      //},
      //error => {
       // alert('Educación editada correctamente');
       // this.cargarEducacion();
       // this.form.reset();
     // }
   // )
 // }
//}
 // cargarEducacion() {
  //  throw new Error('Method not implemented.');
 // }

//eliminarEducacion(id: number) {
//  this.sEducacion.delete(id).subscribe(
  //  data => {
   //   alert("se pudo eliminar satisfactoriamente");
     // this.cargarEducacion();
     // this.form.reset();
   // },
   // error => {
     // alert("se pudo eliminar satisfactoriamente");
     // this.cargarEducacion();
     // this.form.reset();
   // }
 // )
//}

    
    
  
//}
 
  //llamar al servicio y enviar los datos.
  //eliminarEducacion(id:number){
   // alert("El registro a eliminar es: " + id);
 // }
//}
    
  



//alert("Registro a modificar" + this.form.get("id")?.value);







 
  
    





