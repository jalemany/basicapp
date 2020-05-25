export class Direccion {
    
    direccion:string = null;
    poblacion:string = null;
    codigoPostal:string = null;
    provincia:string = null;
    pais:string = null;

    constructor(direccion?:string,poblacion?:string,codigoPosta?:string,provincia?:string,pais?:string){
        this.direccion = direccion;
        this.poblacion = poblacion;
        this.codigoPostal = codigoPosta;
        this.provincia = provincia;
        this.pais = pais;
    }
}