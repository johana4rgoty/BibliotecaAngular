
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../reserva/reserva.component';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent, MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule, MatDatepickerModule} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { ReservaService } from './../../services/reserva.service';
import { Reserva } from '../../services/reserva';
import {map} from 'rxjs/operators';
import {switchMap} from 'rxjs/operators';
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
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DialogRreservaComponent implements OnInit{
  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  reservas: Reserva;
  constructor( 
    private reservaService: ReservaService,
    private loadingService: TdLoadingService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DialogRreservaComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
    )  { }

    ngOnInit() {
      this.loadingService.register('reservas');
      this.route.params
        .pipe(map((params: Params) => params.reservasId))
        .pipe(switchMap(reservasId => this.reservaService.get<Reserva>(reservasId)))
        .subscribe(customer => {
          this.reservas = customer;
          this.loadingService.resolve('reservas');
        });
    }

 
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
