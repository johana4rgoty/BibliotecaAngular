import { RestService } from './rest.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService extends RestService {
  resource : string ='/user';

}
