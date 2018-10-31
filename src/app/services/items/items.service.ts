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

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}
  getItems(): Observable < Item[] > {
    return Observable.create(observer => {
      console.log('getItems Called');

      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': localStorage.getItem('token')
        })
      };

      // const items: Item[] = [];
      // items???
      this.http.get(environment.baseURL + 'items', httpOptions)
        .subscribe((items: Item[]) => {
          console.log('items: ', items);
          observer.next(items);
          observer.complete();
        });
    });
  }

  addItem() {

  }

}
