import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { InicioComponent } from './components/inicio/inicio.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { RegistroComponent } from './components/registro/registro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BibliotecaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    MatFormFieldModule,  
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
    BsDropdownModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
