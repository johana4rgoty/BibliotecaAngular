import { UserService } from './../../services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
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
//import { HoursValidator } from '../validators/hours.validator';


// <form #f="ngForm" (ngSubmit)="onSubmit(f)"> ...
// <input **name="firstName" ngModel** placeholder="Enter your first name">


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
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  //verifivar btn  para colocar los ngmodel
  //name: string;
  //book: string;
  selectedReserva: string;
  reserva: Reserva;
  //para usar formulario re
  reservaForm: FormGroup;
  user: User;
  users: User[];
  reservas : Reserva[];
  //total = 0;



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
        userId: [''],
        book: ['', Validators.required],
        dateReserva: ['', Validators.required],
        selectedReserva: [0, Validators.required],
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
  
    //   combineLatest(
    //     this.invoiceForm.get('rate').valueChanges,
    //     this.invoiceForm.get('hours').valueChanges
    //   ).subscribe(([rate = 0, hours = 0]) => {
    //     this.total = rate * hours;
    //   });
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

   openDialog(): void {
     const dialogRef = this.dialog.open(DialogRreservaComponent, {
       width: '250px',
       data: {selectedReserva: this.selectedReserva}
     });

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.selectedReserva = result;
     });
   }

}
