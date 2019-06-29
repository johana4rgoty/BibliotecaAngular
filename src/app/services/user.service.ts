import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable()
export class UserService extends RestService {
  resource: string = '/users';
  
}

