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
  addItem(item: any) {
    console.log('item: ', item);
    return Observable.create(observer => {
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };
      let newItem = {};
      if (item.Computer === null || item.Computer === undefined) {
        newItem = {
          name: item.Name,
          brand: item.Brand,
          model: item.Model,
          serial_number: item.Serial_number,
          location_id: item.Location_id,
          checked_out_id: item.Checked_out_id,
          price: item.Price,
          quantity: item.Quantity,
        };
      } else {
        newItem = {
          name: item.Name,
          price: item.Price,
          quantity: item.Quantity,
          computer_attributes: {
            utag: item.Computer.UTag,
            cpu: item.Computer.CPU,
            ram: item.Computer.RAM,
            hdd: item.Computer.HDD
          }
        };
      }

      console.log('newItem: ', newItem);
      this.http.post(environment.baseURL + 'items', newItem, httpOptions)
        .subscribe((addedItem: any) => {
            console.log('Success-Without Computer: ', addedItem);
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
    return Observable.create(observer => {
    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };
    const UpdatedItem = {
      name: item.Name,
      brand: item.Brand,
      model: item.Model,
      serial_number: item.Serial_number,
      location_id: item.Location_id,
      price: item.Price,
      quantity: item.Quantity,
      user_id: currentUser.id,
    };
    this.http.patch(environment.baseURL + 'items/' + item.id, UpdatedItem, httpOptions)
      .subscribe(() => {
        console.log('Success');
        observer.next();
        observer.complete();
      }, error => {
        console.log('Error');
        observer.next();
        observer.complete();
      });
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
