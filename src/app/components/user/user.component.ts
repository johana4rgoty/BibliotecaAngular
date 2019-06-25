import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { Customer } from './../../services/Customer';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  customers: Customer[];

  constructor(
    private loadingService: TdLoadingService,
   // private userService: UserService
     ) { }

  ngOnInit() {
  
    this.loadingService.register('');
    //  this.userService.query<Array<Customer>>({sort: 'created', order: 'desc'})
    //    .subscribe(customers => {
    //      this.customers = customers;
    //      this.loadingService.resolve('');
    //    });
   }
  }





