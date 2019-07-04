import { User } from 'src/app/services/user';
import { UserService } from './../../services/user.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TdLoadingService, TdDialogService} from '@covalent/core';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


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
  user: User;
  ELEMENT_DATA: User[] = [];

  constructor(private loadingService: TdLoadingService, 
    private router: Router,
    private userService: UserService, 
    private dialogService: TdDialogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadingService.register('users');
    this.userService.query<Array<User>>({ sort: 'created', order: 'desc' })
      .subscribe(invoices => {
        this.users = invoices;
        this.loadingService.resolve('users');
      });
      this.loadingService.register('user');
     this.route.params.pipe(map((params: Params) => params.userId)).subscribe(userId => {
       if (userId) {
         this.userService.get<User>(userId).subscribe(customer => {
           this.user = customer;
           this.loadingService.resolve('user');
         });
       } else {
         this.user = new User();
         this.loadingService.resolve('user');
       }
     });
  }
  //para la tabla
  displayedColumns: string[] = ['name'];
  //dataSource = ELEMENT_DATA;
  delete(){
    this.dialogService.openConfirm({
      message: 'Usted desea eliminar ese usuario',
      title: 'confirmar',
      acceptButton: 'Delete'
    }).afterClosed().subscribe((accept: Boolean)=>{
      if(accept){
        this.loadingService.register('user');
        this.userService.delete(this.user.id).subscribe(response=>{
          this.loadingService.resolve('user');
          this.user.id= null;
          this.cancel();
        });
      }
    });

}
cancel(){
  if(this.user.id){
    this.router.navigate(['/user', this.user.id]);
  }else{
    this.router.navigateByUrl('/user');
  }

}

 
}





