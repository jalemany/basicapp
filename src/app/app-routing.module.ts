import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { ListadoClienteComponent }  from './components/listado-cliente/listado-cliente.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: "clientes", component:ListadoClienteComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
