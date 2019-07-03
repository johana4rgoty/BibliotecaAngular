import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule } from '@covalent/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
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
// Componentes paginas
import { InicioComponent } from './components/inicio/inicio.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UserComponent } from './components/user/user.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { DialogRreservaComponent } from './components/dialog-rreserva/dialog-rreserva.component';
import {MatDialogModule} from '@angular/material/dialog';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';




export const ROUTES = [
  { path: 'registro', component: RegistroComponent },
  { path: 'user', component: UserComponent },
  { path: 'invoices/create', component: UserComponent },
  { path: 'invoices/:invoiceId', component: UserComponent },
  //{ path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },

  { path: '', pathMatch: 'full', redirectTo: '/user' },

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
    IniciarSesionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
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
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
