export class Referencia {

    id?:number;
    nombre: string;
    cargo:string;
    contacto:string;
apellido: any;

    constructor(nombre:string, cargo:string, contacto:string){
        this.nombre = nombre;
        this.cargo = cargo;
        this.contacto = contacto;
}
}