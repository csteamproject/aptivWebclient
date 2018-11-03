import {
  Injectable
} from '@angular/core';
import {
  Item
} from '../../classes/item/item';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  environment
} from '../../../environments/environment.prod';
import {
  Observable
} from 'rxjs';
import { User } from 'src/app/classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}
  getItems(): Observable < Item[] > {
    return Observable.create(observer => {
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };

      this.http.get(environment.baseURL + 'items', httpOptions)
        .subscribe((items: Item[]) => {
          observer.next(items);
          observer.complete();
        });
    });
  }

  addItem() {

  }

}
