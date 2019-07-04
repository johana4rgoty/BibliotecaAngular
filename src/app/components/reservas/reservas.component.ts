import { Component, OnInit } from '@angular/core';
import { TdLoadingService, TdDialogService} from '@covalent/core';
import { ReservaService } from './../../services/reserva.service';
import { Reserva } from 'src/app/services/reserva';

import { User } from 'src/app/services/user';
import { UserService } from './../../services/user.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  //exportar del servicio reserva
  reservas: Reserva[];
  reserva: Reserva;

  constructor(private loadingService: TdLoadingService,
     private reservaService: ReservaService,
    private router: Router,
    private userService: UserService, 
    private dialogService: TdDialogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadingService.register('reservas');
    this.reservaService.query<Array<Reserva>>({ sort: 'created', order: 'desc' })
      .subscribe(invoices => {
        this.reservas = invoices;
        this.loadingService.resolve('reservas');
      });

    
      this.loadingService.register('reservas');
     this.route.params.pipe(map((params: Params) => params.reservaId)).subscribe(reservaId => {
       if (reservaId) {
         this.reservaService.get<Reserva>(reservaId).subscribe(customer => {
           this.reserva = customer;
           this.loadingService.resolve('reserva');
         });
       } else {
         this.reserva = new Reserva();
         this.loadingService.resolve('reserva');
       }
     });
  }

    //dataSource = ELEMENT_DATA;
    delete(){
      this.dialogService.openConfirm({
        message: 'Usted desea eliminar ese usuario',
        title: 'confirmar',
        acceptButton: 'Delete'
      }).afterClosed().subscribe((accept: Boolean)=>{
        if(accept){
          this.loadingService.register('reserva');
          this.reservaService.delete(this.reserva.id).subscribe(response=>{
            this.loadingService.resolve('reserva');
            this.reserva.id= null;
            this.cancel();
          });
        }
      });
  
  }
  cancel(){
    if(this.reserva.id){
      this.router.navigate(['/reservas', this.reserva.id]);
    }else{
      this.router.navigateByUrl('/reservas');
    }
  
  }

}
