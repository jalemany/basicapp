import { Direccion } from './direccion';

export class Cliente {

    id: number;

    nombre:string;
    direccion: Direccion;

    constructor(id?:number, nombre?:string, direccion?:Direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}