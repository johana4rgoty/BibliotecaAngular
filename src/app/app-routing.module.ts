import { DialogRreservaComponent } from './components/dialog-rreserva/dialog-rreserva.component';
import { UserComponent } from './components/user/user.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';



const routes: Routes = [
  {
     path: '',
     component: BibliotecaComponent    
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  { path: 'user/:userId', 
  component: UserComponent },
  {
    path: 'user/create',
    component: RegistroComponent
  },
  { path: 'registro/:userId/edit',
   component: RegistroComponent 
  },

  {
    path: 'reserva',
    component: ReservaComponent
  },

  {
    path: 'dialog-reserva',
    component: DialogRreservaComponent
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
