
import { NgModule }             from '@angular/core';

// Modules
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';

// Components
import { AppComponent }         from './app.component';
import { ListadoClienteComponent } from './components/listado-cliente/listado-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { EuroPipe } from './pipes/euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoClienteComponent,
    HomeComponent,
    EuroPipe
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
