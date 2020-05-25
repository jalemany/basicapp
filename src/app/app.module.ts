
import { NgModule }                 from '@angular/core';

// Modules
import { AppRoutingModule }         from './app-routing.module';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';
import { ReactiveFormsModule }      from '@angular/forms';

// Components
import { AltaClienteComponent }     from './components/alta-cliente/alta-cliente.component';
import { AppComponent }             from './app.component';
import { FichaClienteComponent }    from './components/ficha-cliente/ficha-cliente.component';
import { HomeComponent }            from './components/home/home.component';
import { ListadoClienteComponent }  from './components/listado-cliente/listado-cliente.component';

// Pipes
import { EuroPipe }                 from './pipes/euro.pipe';

@NgModule({
  declarations: [
    AltaClienteComponent,
    AppComponent,
    FichaClienteComponent,
    HomeComponent,
    ListadoClienteComponent,
    EuroPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
