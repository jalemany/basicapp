import { Component, OnInit }                    from '@angular/core';
import { FormBuilder, Validators, FormGroup }   from '@angular/forms';
import { Router }                               from '@angular/router';
import { ClienteService }                       from 'src/app/services/cliente.service';
import { Cliente }                              from 'src/app/model/cliente';
import { Direccion }                            from 'src/app/model/direccion';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit{

  clienteForm: FormGroup = undefined;
 
  constructor(private formBuilder: FormBuilder,
              private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.inicializarFornulario();
  }

  inicializarFornulario() {
    
    this.clienteForm = this.formBuilder.group({
      id: ['', Validators.required],
      nombre:['', Validators.required],
      direccion:[''],
      poblacion:[''],
      codigoPostal:[''],
      provincia:[''],
      pais:['']                       
    });
  }
            
  create(){

    let direccion: Direccion = new Direccion();

    direccion.direccion = this.clienteForm.value.direccion;
    direccion.poblacion = this.clienteForm.value.poblacion;
    direccion.codigoPostal = this.clienteForm.value.codigoPostal;
    direccion.provincia = this.clienteForm.value.provincia;
    direccion.pais = this.clienteForm.value.pais;

    let cliente: Cliente = new Cliente();

    cliente.id = this.clienteForm.value.id;
    cliente.nombre = this.clienteForm.value.nombre;
    cliente.direccion = direccion;

    this.clienteService.create(cliente).subscribe(data => {
      this.router.navigate(["clientes"]);
    });
  }

}
