import { DialogRreservaComponent } from './components/dialog-rreserva/dialog-rreserva.component';
import { UserComponent } from './components/user/user.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ReservasComponent } from './components/reservas/reservas.component';



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
    path: 'registro/create',
    component: RegistroComponent
  },
  { path: 'registro/:userId/edit',
   component: RegistroComponent 
  }, 
  {
    path: 'dialog-reserva',
    component: DialogRreservaComponent
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent
  },
  {
    path: 'reservas',
    component: ReservasComponent
  },  
  { path: 'reservas/:reservaId', 
  component: ReservasComponent 
},
  { path: 'reserva',
   component: ReservaComponent 
  },
  {
    path: 'reserva/create',
    component: ReservaComponent
  },
  { path: 'reserva/:reservaId', 
  component: DialogRreservaComponent 
 }, 
  { path: 'reserva/:reservaId/edit',
   component: ReservaComponent 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
