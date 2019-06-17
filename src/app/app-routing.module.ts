import { RegistroComponent } from './components/registro/registro.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
     path: '',
     component: InicioComponent    
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
