import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';




@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styleUrls: ['./modal-persona.component.css']
})
export class ModalPersonaComponent implements OnInit {
  form: FormGroup;
  item: Persona[] = [];
    id?:number;
   persona: any;
NombreInvalido: any;
Nombrevalido: any;
Nombre: any;
ApellidoInvalido: any;
ApellidoValido: any;
Apellido: any;
Url_bannerInvalido: any;
Url_bannerValido: any;
Url_banner: any;
Foto_perfilInvalido: any;
Foto_perfilValido: any;
Foto_perfil: any;
AcercaInvalido: any;
AcercaValido: any;
Acerca: any;
FraseInvalido: any;
FraseValido: any;
Frase: any;
  
 
  

 constructor(
  //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private formBuilder: FormBuilder, private sPersona: PersonaService) {
    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required,Validators.minLength(2)]],
      url_banner: ['', [Validators.required]],
      foto_perfil: ['', [Validators.required]],
      acerca: ['', [Validators.required, Validators.minLength(2)]],
      frase: ['', [Validators.required, Validators.minLength(2)]],
      email: [''],
      password: [''],
      id: [''],
      })
   }
  ngOnInit(): void {
    this.cargarPersona();
  }
  
  
  onLoadModal(item:any){
    this.form.get("nombre")?.setValue(item.nombre);
    this.form.get("apellido")?.setValue(item.apellido);
    this.form.get("url_banner")?.setValue(item.url_banner);
    this.form.get("foto_perfil")?.setValue(item.foto_perfil);
    this.form.get("acerca")?.setValue(item.acerca);
    this.form.get("frase")?.setValue(item.frase);
    this.form.get("id")?.setValue(item.id);
  }
  
   
  cargarPersona(): void {
    this.sPersona.list().subscribe(
      data => {
        this.persona = data;
  }
    )
  }
  cargarDetalle(id: number){
    this.sPersona.getById(id).subscribe(
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
    let persona = this.form.value;
    console.log()
    if (persona.id == '') {
      this.sPersona.save(persona).subscribe(
        (      data: any) => {
  alert("Su nueva Persona fue añadida correctamente");
          this.cargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.sPersona.save(persona).subscribe(
        (      data: any) => {
          alert("Persona editada!");
          this.cargarPersona();
          this.form.reset();
        }
      )
    }
  }
      
  borrar(id: number): void {
    if (confirm('¿Está seguro que desea eliminar este elemento?')) {
      this.sPersona.delete(id).subscribe(
        (        data: any) => {
          this.cargarPersona();
        },
                error => {
                  alert("No se pudo eliminar")
        }
      );
    }
  }
  reset(): void {
    this.form.reset();
    this.form.get('id')?.setValue('');
  }


}
  
