import { UserService } from './../../services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DialogRreservaComponent } from '../dialog-rreserva/dialog-rreserva.component';
import { FormControl, Validators, FormsModule, FormBuilder, FormGroup, } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TdLoadingService, TdDialogService } from '@covalent/core';
import { User } from './../../services/user';
import { Reserva} from './../../services/reserva';
import { ReservaService } from './../../services/reserva.service'
//import { CustomersService } from '../services/customers.service';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
//cambiar la fecha
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';
const moment = _rollupMoment || _moment;

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'DD MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'DD MMMM YYYY',
//   },
// };


//para crear el json tiene dia(viewValue) es decir el nro q se va amostrar y validacion en selected reserva sale lo del value osea el q el escoja day.value
export interface Day {
  value: string;
  viewValue: string;
}

//verifivar btn
export interface DialogData {
  name: string;
  book: string;
  selectedReserva: string;
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
  styleUrls: ['./reserva.component.css'],
  // providers: [
  //   // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
  //   // application's root module. We provide it at the component level here, due to limitations of
  //   // our example generation script.
  //   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],
})
export class ReservaComponent implements OnInit {
  //verifivar btn  para colocar los ngmodel
  //name: string;
  //book: string;
  // selectedReserva:string;
  reserva: Reserva;
  //para usar formulario re
  reservaForm: FormGroup;
  select
  user: User;
  users: User[];
  reservas : Reserva[];
  dateN = 0;
  //date del dateReseva
  events: string[] = [];
  //date del dateEntrega
  // date2 = new FormControl(moment());
  date  =  new  FormControl(new  Date());

  //dateReserva
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let dia: number = event.value.getDay() 
    let select:number = parseInt(this.reservaForm.get('selectedReserva').value)
    let diaEntrega:number = dia+select
    
    this.events.push(`${diaEntrega}`);
    // console.log(diaEntrega);
  }
  //dateReserva
  // chosenYearHandler(normalizedYear: Moment) {
  //   const ctrlValue = this.date.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.date.setValue(ctrlValue);
  // }

  // chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.date.value;
  //   ctrlValue.month(normalizedMonth.month());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close();
  // }



  constructor(
    public dialog: MatDialog,
    private loadingService: TdLoadingService,
    private userService: UserService,
    private router: Router,
    private dialogService: TdDialogService,
    private reservaService: ReservaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      //reservaForm del form del html

      this.reservaForm = this.formBuilder.group({
        id: [''],        
        userId: [0],
        book: ['', Validators.required],
        dateReserva: ['', Validators.required],
        selectedReserva: [1, Validators.required],
         //hours: ['', [Validators.required, HoursValidator]],
        dateEntrega: ['', Validators.required],
       
      });
     }

     

     ngOnInit() {
      this.loadingService.register('reserva');
      this.loadingService.register('users');
  
      this.userService.query<Array<User>>().subscribe(customers => {
        this.users = customers;
        this.loadingService.resolve('users');
      });
  
       this.route.params.pipe(map((params: Params) => 
       params.reservaId)).subscribe(reservaId => {
        if (reservaId) {
          this.reservaService.get<Reserva>(reservaId).subscribe(reserva => {
             this.reservaForm.setValue(reserva);
             this.reserva = reserva;
             this.loadingService.resolve('reserva');
           });
         } else {
           this.reserva = new Reserva();
           this.loadingService.resolve('reserva');
         }
       });
  
       combineLatest(
         this.reservaForm.get('selectedReserva').valueChanges,
         this.reservaForm.get('dateEntrega').valueChanges
       ).subscribe(([selectedReserva = 5, dateEntrega = 0]) => {
         this.dateN = selectedReserva;
       });
     }
  
     save() {
       if (this.reserva.id) {
         this.reservaService.update<Reserva>(this.reserva.id, this.reservaForm.value).subscribe(response => {
           this.viewInvoice(response.id);
         });
       } else {
         this.reservaService.create<Reserva>(this.reservaForm.value).subscribe(response => {
           this.viewInvoice(response.id);
         });
       }
     }
    //fm T
  
     delete() {
       this.dialogService.openConfirm({
         message: 'Are you sure you want to delete this invoice?',
         title: 'Confirm',
         acceptButton: 'Delete'
       }).afterClosed().subscribe((accept: boolean) => {
         if (accept) {
           this.loadingService.register('reserva');
           this.reservaService.delete(this.reserva.id).subscribe(response => {
             this.loadingService.resolve('reserva');
             this.reserva.id = null;
             this.cancel();
           });
         }
       });
     }
  
     cancel() {
       if (this.reserva.id) {
         this.router.navigate(['/reservas', this.reserva.id]);
       } else {
         this.router.navigateByUrl('/reservas');
       }
     }
  
     private viewInvoice(id: number) {
       this.router.navigate(['/reservas', id]);
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

//   //btn abrir la model

  //  openDialog(): void {
  //    const dialogRef = this.dialog.open(DialogRreservaComponent, {
  //      width: '250px',
  //      data: {selectedReserva: this.selectedReserva}
  //    });

  //    dialogRef.afterClosed().subscribe(result => {
  //      console.log('The dialog was closed');
  //      this.selectedReserva = result;
  //    });
  //  }

}
