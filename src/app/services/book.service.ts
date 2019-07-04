import { Injectable } from '@angular/core';
import { RestService } from './rest.service';


@Injectable()
export class BookService extends RestService {
  resource: string = '/books';

}
