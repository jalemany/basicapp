import { Component, OnInit }  from '@angular/core';
import { ClienteService }     from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {

  clientes:Cliente[] = undefined;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(){
    this.populateData();
  }

  populateData(){
    this.clienteService.getAll().subscribe(data => {
      this.clientes = data;
    });
  }

}
