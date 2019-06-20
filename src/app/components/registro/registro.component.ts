import { User } from './../../services/user';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { TdLoadingService, TdDialogService} from '@covalent/core';
import { UserService} from '../../services/user.service'
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatFormFieldModule,  
      MatInputModule   
  ]
})


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hide= true;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  // loadingService: any;
  getErrorMessage(){
    return this.email.hasError('required') ? 'usted debe digitar un valor' : 
    this.email.hasError('email') ? 'No es valido' : '' ;
   
  }

  constructor(
    private loadingService : TdLoadingService,
    // private router : Router,
    private dialogService : TdDialogService,
    // private userService : UserService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
//     this.loadingService.register('user');
//     this.route.params.pipe(map((params: Params) => params.userId)).subscribe(userId => {
//  if (userId){
//    this.userService.get<User[]>(userId).subscribe(users =>{
//      this.user = users;     
//      this.loadingService.resolve('user');
//    });

//  }else{
//    this.user = new User();
//    this.loadingService.resolve('user');
//  }
//     });
  }
  save(){
    // if(this.user.id){
    //   this.userService.update<User>(this.user.id, this.user).subscribe(response =>{
        
    //   })
    // }
    
  }
  delete(){

  }
  cancelar(){

  }

}
