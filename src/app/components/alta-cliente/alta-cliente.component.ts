import { Component }        from '@angular/core';
import { ClienteService }   from 'src/app/services/cliente.service';
import { Cliente }          from 'src/app/model/cliente';
import { Direccion }        from 'src/app/model/direccion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {

  newCliente: Cliente = new Cliente(null,null, new Direccion(null,null,null,null,null));

  constructor(private clienteService: ClienteService,
              private router: Router) { }

 
  create(){

    this.newCliente.id = Math.floor(Math.random() * 20000);
    this.newCliente.nombre = "NUEVO NOMBRE";
    this.newCliente.direccion.direccion = "direccion";
    this.newCliente.direccion.poblacion = "población";
    this.newCliente.direccion.codigoPostal = "codigo posgtal";
    this.newCliente.direccion.provincia = "provincia";
    this.newCliente.direccion.pais = "pais";

    this.clienteService.create(this.newCliente).subscribe(data => {
      console.log(data);
      this.router.navigate(["clientes"]);
    });
  }

}
