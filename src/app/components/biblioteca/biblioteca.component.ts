import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService} from '../../services/user.service'
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
//para realizar el crud de registro con servidor
import { User } from '../../services/User';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { TdLoadingService, TdDialogService} from '@covalent/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  hide= true;
  // validacion del email cuando aparece un error 
  email = new FormControl('', [Validators.required, Validators.email]);
  // loadingService: any;
  getErrorMessage(){
    return this.email.hasError('required') ? 'usted debe digitar un valor' : 
    this.email.hasError('email') ? 'No es valido' : '' ;  
  }

  constructor() { }

  ngOnInit() {
  }

}
