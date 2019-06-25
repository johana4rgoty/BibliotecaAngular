import { UserService } from './../../services/user.service';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
//para realizar el crud de registro con servidor
import { User } from '../../services/User';
import { Customer} from './../../services/Customer'
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { TdLoadingService, TdDialogService} from '@covalent/core';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@NgModule({
  imports: [
      MatFormFieldModule,  
      MatInputModule,
      FormsModule,
     
  ]
})


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    // user que se encuentran en la carpeta service    
    user: User;
    customer: Customer;
  
    //directiva ngmodel  
    // users = new User();
  
  // validacion del password
  hide= true;
  // validacion del email cuando aparece un error 
  email = new FormControl('', [Validators.required, Validators.email]);
  // loadingService: any;
  getErrorMessage(){
    return this.email.hasError('required') ? 'usted debe digitar un valor' : 
    this.email.hasError('email') ? 'No es valido' : '' ;  
  }

  

  constructor(
    private loadingService: TdLoadingService,
    private router: Router,
    private dialogService: TdDialogService,
    // private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.loadingService.register('customer');
    // this.route.params.pipe(map((params: Params) => params.customerId)).subscribe(customerId => {
    //   if (customerId) {
    //     this.userService.get<Customer>(customerId).subscribe(customer => {
    //       this.customer = customer;
    //       this.loadingService.resolve('customer');
    //     });
    //   } else {
    //     this.customer = new Customer();
    //     this.loadingService.resolve('customer');
    //   }
    // });
    
    // this.loadingService.register('registro');
    // this.route.params.pipe(map((params: Params) => params.invoiceId)).subscribe(invoiceId => {
    //   if (invoiceId) {
    //     this.userService.get<User>(invoiceId).subscribe(users => {
    //       this.user = users;
    //       this.loadingService.resolve('registro');
    //     });
    //   } else {
    //     this.user = new User();
    //     this.loadingService.resolve('registro');
    //   }
    // });
  }
  //funtion btn
  save(){
      // if(this.user.id){
      //   this.userService.update<User>(this.user.id, this.user).subscribe(response =>{
      //      this.viewUser(response.id);
      //   });
      // } else{
      //   this.userService.create<User>(this.user).subscribe(response =>{
      //      this.viewUser(response.id);
      //   })
      // }
    
  }
  delete(){
    //  this.dialogService.openConfirm({
    //    message: 'Usted desea eliminar ese usuario',
    //    title: 'confirmar',
    //    acceptButton: 'Delete'
    //  }).afterClosed().subscribe((accept: Boolean)=>{
    //    if(accept){
    //      this.loadingService.register('user');
    //      this.userService.delete(this.user.id).subscribe(response=>{
    //        this.loadingService.resolve('user');
    //        this.user.id= null;
    //        this.cancelar();
    //      });
    //    }
    //  });

  }
  cancelar(){
    //  if(this.user.id){
    //    this.router.navigate(['/registro', this.user.id]);
    //  }else{
    //    this.router.navigateByUrl('/registro');
    //  }

  }
  private viewUser(id: number){
    //  this.router.navigate(['/registro', id]);

   }

}
