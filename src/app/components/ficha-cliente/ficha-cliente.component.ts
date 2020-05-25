import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-ficha-cliente',
  templateUrl: './ficha-cliente.component.html',
  styleUrls: ['./ficha-cliente.component.css']
})
export class FichaClienteComponent implements OnInit {

  cliente: Cliente = undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private clienterService: ClienteService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cargarCliente(params['id']);
    });
  }

  cargarCliente(id: number){
    this.clienterService.getByCode(id).subscribe(data => {
      this.cliente = data;
    });
  }


}
