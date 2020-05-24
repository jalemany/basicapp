import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { ListadoClienteComponent }  from './components/listado-cliente/listado-cliente.component';


const routes: Routes = [
  {path:"clientes", component:ListadoClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
