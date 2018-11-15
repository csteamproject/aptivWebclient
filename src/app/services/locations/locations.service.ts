import {
  Injectable
} from '@angular/core';
import {
  Location
} from '../../classes/location/location';
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
export class LocationsService {

  constructor(private http: HttpClient) {}

  // This Service Function gets all the Items from the API
  getLocations(): Observable < Location[] > {
    return Observable.create(observer => {
      console.log('getLocations called');
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };

      this.http.get(environment.baseURL + 'locations', httpOptions)
        .subscribe((locations: Location[]) => {
          console.log(locations);
          observer.next(locations);
          observer.complete();
        });
    });
  }


  // This Service Function adds a new Item to the API
  addLocation(location: any) {
    console.log('location: ', location);
    return Observable.create(observer => {
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };
      let newLocation = {};
        newLocation = {
          unit: location.Unit,
          building: location.Building,
          street: location.Street,
          city: location.City,
          region: location.Region,
         country: location.Country,
          address_code: location.Address_code
           };
      console.log('newLocation: ', newLocation);
      this.http.post(environment.baseURL + 'locations', newLocation, httpOptions)
        .subscribe((addedLocation: any) => {
            console.log('Success: ', addedLocation);
            observer.next(addedLocation);
            observer.complete();
        }, error => {
          console.log('Error');
          observer.next(error);
          observer.complete();
        });
    });
  }

  // This Service Function adds a new Item to the API
  // addLocation(item: any) {
  //   console.log('location: ', item);
  //   return Observable.create(observer => {
  //     const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         'jwt-token': currentUser.token
  //       })
  //     };
  //     const newItem = {
  //       name: item.Name,
  //       price: item.Price,
  //       quantity: item.Quantity
  //     };
  //     console.log('newItem: ', newItem);
  //     this.http.post(environment.baseURL + 'items', newItem, httpOptions)
  //       .subscribe((addedItem) => {
  //         console.log('Success: ', addedItem);
  //         observer.next(addedItem);
  //         observer.complete();
  //       }, error => {
  //         console.log('Error');
  //         observer.next(error);
  //         observer.complete();
  //       });
  //   });
  // }

  // This Service Function edits an existing Location from an API
  editLocation(location: any) {
    console.log('LocationService editLocation location: ', location);
    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };
    const UpdatedLocation = {
      unit: location.unit,
      building: location.building,
      street: location.street,
      city: location.city,
      region: location.region,
      country: location.country,
      address_code: location.address_code
    };

    this.http.patch(environment.baseURL + 'locations/' + location.id, UpdatedLocation, httpOptions)
      .subscribe(() => {
        console.log('Success');
      }, error => {
        console.log('Error');
      });
  }

  // This Service Hard Deletes an existing Item from an API
  // deleteItem(id: number) {
  //   const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'jwt-token': currentUser.token
  //     })
  //   };

  //   this.http.delete(environment.baseURL + 'items/' + id, httpOptions)
  //     .subscribe(() => {
  //       console.log('Success');
  //     }, error => {
  //       console.log('Error');
  //     });
  // }
}
