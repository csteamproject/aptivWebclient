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
} from '../../../environments/environment';
import {
  Observable
} from 'rxjs';
import {
  User
} from 'src/app/classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}

  // This Service Function gets all the Items from the API
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

  // This Service Function adds a new Item to the API
  addItem(item: Item) {
    return Observable.create(observer => {
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };
      const newItem = {
        name: item.name,
        price: item.price,
        quantity: item.quantity
      };

      this.http.post(environment.baseURL + 'items', newItem, httpOptions)
        .subscribe((addedItem) => {
          console.log('Success');
          observer.next(addedItem);
          observer.complete();
        }, error => {
          console.log('Error');
          observer.next(error);
          observer.complete();
        });
    });
  }

  // This Service Function edits an existing Item from an API
  editItem(item: any) {
    console.log('ItemService editItem item: ', item);
    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };
    const UpdatedItem = {
      name: item.Name,
      price: item.Price,
      quantity: item.Quantity
    };

    this.http.patch(environment.baseURL + 'items/' + item.ID, UpdatedItem, httpOptions)
      .subscribe(() => {
        console.log('Success');
      }, error => {
        console.log('Error');
      });
  }

  // This Service Hard Deletes an existing Item from an API
  deleteItem(id: number) {
    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };

    this.http.delete(environment.baseURL + 'items/' + id, httpOptions)
      .subscribe(() => {
        console.log('Success');
      }, error => {
        console.log('Error');
      });
  }
}
