import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { ListadoClienteComponent }  from './components/listado-cliente/listado-cliente.component';
import { HomeComponent }            from './components/home/home.component';
import { AltaClienteComponent }     from './components/alta-cliente/alta-cliente.component';
import { FichaClienteComponent }    from './components/ficha-cliente/ficha-cliente.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: "clientes", component:ListadoClienteComponent},
  { path: "alta-cliente", component:AltaClienteComponent},
  { path: "ficha-cliente/:id", component:FichaClienteComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
