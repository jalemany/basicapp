
import { NgModule }             from '@angular/core';

// Modules
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';

// Components
import { AppComponent }         from './app.component';
import { ListadoClienteComponent } from './components/listado-cliente/listado-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoClienteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
