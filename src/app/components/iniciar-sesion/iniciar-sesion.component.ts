import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../app.component';
import {FormControl, Validators} from '@angular/forms';
import {MatDatepickerInputEvent, MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule, MatDatepickerModule} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { DialogRreservaComponent } from '../dialog-rreserva/dialog-rreserva.component';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {



  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<IniciarSesionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

   onNoClick(): void {
     this.dialogRef.close();
   }
  //para la validacion del email
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  //validacion para password
  hide = true;

}
