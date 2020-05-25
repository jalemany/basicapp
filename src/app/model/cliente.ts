import { Direccion } from './direccion';

export class Cliente {

    id: number = null;
    nombre:string = null;
    direccion: Direccion = new Direccion();

    constructor(id?:number, nombre?:string, direccion?:Direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}