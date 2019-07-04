import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ReservaService extends RestService {
  resource: string = '/reservas';

}


