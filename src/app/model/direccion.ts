export class Direccion {
    
    direccion:string;
    poblacion:string;
    codigoPostal:string;
    provincia:string;
    pais:string;

    constructor(direccion:string,poblacion:string,codigoPosta:string,provincia:string,pais:string){
        this.direccion = direccion;
        this.poblacion = poblacion;
        this.codigoPostal = codigoPosta;
        this.provincia = provincia;
        this.pais = pais;
    }
}