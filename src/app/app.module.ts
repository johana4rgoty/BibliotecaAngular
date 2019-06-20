import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
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




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BibliotecaComponent,
    RegistroComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,   
    MatFormFieldModule,  
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
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
    MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
