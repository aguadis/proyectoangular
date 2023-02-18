import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../servicios/proyectos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from '../entidades/persona';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  FormGroup: any;
  email = '';
  password = '';
  authService: any;
  form: any;
 

  // Inyectar en el constructor el formBuilder
  constructor(public _servicio: ProyectosService,  private formBuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
     
   })
}
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    
     
   if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      event.preventDefault; 
  let persona:Persona = new Persona("", "", "", "", "", "",this.form.get("email"),this.form.get("password"));
  
      this.autenticacionService.login(this.form.value).subscribe(data=>{
        console.log("DATA:" + JSON.stringify(data));
        if (data === null || data === undefined)
        {
          alert("Credenciales no validas");
        }else{
        this.ruta.navigate(['/dashboard']);
        }
      },
      error=>{
        console.log(error);
        alert("Credenciales no validos" + error);
      })
      
    }
    else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      sessionStorage.setItem('currenUser', "null");
      sessionStorage.setItem('idUser', "0");
      alert("Credenciales no validas");
    }
 
 }
 ngOnInit(): void {}
 //metodo para el formulario
 
 //toma el dato del password
 get Password(){
 return this.form.get("password");
 }
 
 //toma el dato de mail
 get Mail(){
 return this.form.get("email");
 }
 
 //metodo de validacionde password
 get PasswordValid(){
 return this.Password?.touched && !this.Password?.valid;
 }
 
 //metodo de validacion de mail
 get MailValid(){
 return this.Mail?.touched && !this.Mail?.valid;
 }
 }
