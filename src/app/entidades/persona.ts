export class Persona {
    id?:number;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    url_banner: string;
    foto_perfil: string;
    acerca: string;
    email: string;
   password: string;
    

    constructor (nombre:string, apellido:string, telefono:string, correo:string, url_banner:string, foto_perfil:string, acerca:string, email:string, password:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.url_banner = url_banner;
        this.foto_perfil = foto_perfil;
        this.acerca = acerca;
        this.email = email;
        this.password = password;
}
}