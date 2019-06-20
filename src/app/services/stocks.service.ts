import { Injectable } from '@angular/core';
import { RestService } from './rest.service';


@Injectable()
export class StocksService extends RestService{
  resource: string ="/user";

  
}
