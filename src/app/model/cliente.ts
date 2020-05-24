import { Direccion } from './direccion';

export class Cliente {

    codigo:number;
    nombre:string;
    direccion: Direccion;

    constructor(codigo:number, nombre:string, direccion:Direccion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}