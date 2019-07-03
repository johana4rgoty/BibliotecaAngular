import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogRreservaComponent } from '../dialog-rreserva/dialog-rreserva.component';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// <form #f="ngForm" (ngSubmit)="onSubmit(f)"> ...
// <input **name="firstName" ngModel** placeholder="Enter your first name">


//para crear el json tiene dia(viewValue) es decir el nro q se va amostrar y validacion en selected reserva sale lo del value osea el q el escoja day.value
export interface Day {
  value: string;
  viewValue: string;
}

//verifivar btn
export interface DialogData {
  animal: string;
  name: string;
  book: string;
}
@NgModule({
  imports: [
    FormsModule], 
    // exports: [ DialogRreservaComponent ],
    entryComponents: [DialogRreservaComponent
    ],
    // declarations: [DialogRreservaComponent],

}) 
   





@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  //verifivar btn  para colocar los ngmodel
  animal: string;
  name: string;
  book: string;
  selectedReserva: string;



  constructor(
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  //realiza el select del dia reservado este selectedReserva es el ngmodel del html

 //days es el for 
  days: Day[] = [
    {value: 'un dia', viewValue: '1'},
    {value: 'dos dias', viewValue: '2'},
    {value: 'tres dias', viewValue: '3'}
  ];
  //calendario
  //para crear el calendario
date2 = new FormControl(new Date());
serializedDate = new FormControl((new Date()).toISOString());

  //btn abrir la model

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRreservaComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal, book: this.book, selectedReserva: this.selectedReserva}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
