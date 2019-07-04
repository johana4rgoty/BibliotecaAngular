import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DialogRreservaComponent } from './components/dialog-rreserva/dialog-rreserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { UserService } from './services/user.service';
import { ReservaService } from './services/reserva.service';



export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    UserService,
    ReservaService
  ]
})

export class AppComponent {

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    // this.login();
  }

  visible = false;
    login(): void {
      this.visible = true;
      const dialogRef = this.dialog.open(IniciarSesionComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closedhh');
        this.animal = result;
      });
     
    }

    // https://es.stackoverflow.com/questions/182357/error-staticinjectorerrorappmodulehttpclient






}
