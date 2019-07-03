import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../reserva/reserva.component';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent, MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule, MatDatepickerModule} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
//import * as _moment from 'moment';
//import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';
//const moment = _rollupMoment || _moment;
const moment = _moment;





@Component({
  selector: 'app-dialog-rreserva',
  templateUrl: './dialog-rreserva.component.html',
  styleUrls: ['./dialog-rreserva.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DialogRreservaComponent {
  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  constructor( 
    public dialogRef: MatDialogRef<DialogRreservaComponent>,
    @Inject(MAT_DIALOG_DATA)
     public data: DialogData
    )  { }

 
  onNoClick(): void {
    this.dialogRef.close();
  }

//para crear el calendario
date2 = new FormControl(new Date());
serializedDate = new FormControl((new Date()).toISOString());


//para reservar por un cierto dia
events: string[] = [];

addEvent(event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${event.value.getDay()}`);

}

//para colocar fechas desde aqui
date = new FormControl(moment([2019, 5, 28]));

// myFilter = (d: Date): boolean => {
//   const day = d.getDay();
//   // Prevent Saturday and Sunday from being selected.
//   return day !== 0 && day !== 6;
// }

}
