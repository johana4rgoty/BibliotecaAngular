import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatSelectModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovalentLayoutModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule } from '@covalent/core';
// Componentes paginas
import { InicioComponent } from './components/inicio/inicio.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { RegistroComponent } from './components/registro/registro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { DialogRreservaComponent } from './components/dialog-rreserva/dialog-rreserva.component';
import {MatDialogModule} from '@angular/material/dialog';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';



export const ROUTES = [
  { path: 'registro', component: RegistroComponent },
  // { path: 'dialog-rreserva', Component: DialogRreservaComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BibliotecaComponent,
    RegistroComponent,
    UserComponent,
    ReservaComponent,
    DialogRreservaComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,   
    MatFormFieldModule,  
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule
   
  ],
  entryComponents:[DialogRreservaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
