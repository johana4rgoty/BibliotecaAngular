import { Component, OnInit, Injectable } from '@angular/core';
import { TdLoadingService, TdDialogService} from '@covalent/core';
import { User } from 'src/app/services/user';
import { UserService } from './../../services/user.service';


// para utilizar en el input
//  export interface User {
//    id: number;
//    name: string;
//    email: string;
//  }

//para poder llenar las tablas
//  const ELEMENT_DATA: User[] = [
//    { id: 1, name: 'aa', email:'He' },
//    { id: 2, name: 'bb', email:'He' },
//    { id: 3, name: 'cc', email:'He' },
//  ];





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  // user: User;
  users: User[];
  ELEMENT_DATA: User[] = [];

  constructor(private loadingService: TdLoadingService, private userService: UserService) { }

  ngOnInit() {
    this.loadingService.register('users');
    this.userService.query<Array<User>>({ sort: 'created', order: 'desc' })
      .subscribe(invoices => {
        this.users = invoices;
        this.loadingService.resolve('users');
      });
  }
  //para la tabla
  displayedColumns: string[] = ['name'];
  //dataSource = ELEMENT_DATA;
 
}





