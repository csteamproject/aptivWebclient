import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';

import {
  LocationsService
} from './locations.service';
import {
  Location
} from '../../classes/location/location';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AuthService
} from '../auth/auth.service';
import { IUser } from 'src/app/interfaces/iuser';

describe('LocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationsService, AuthService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([LocationsService], (service: LocationsService) => {
    expect(service).toBeTruthy();
  }));

  it('getLocations() should return at least 1 item when token is valid', async (inject([LocationsService, AuthService],
    (service: LocationsService, auth: AuthService) => {
      // Arrange - Define the class
      auth.login({username: 'jsteele', password: 'abc444abc444'}).subscribe((user: IUser) => {
        // Act - Call the method
        service.getLocations().subscribe((locations: Location[]) => {
          // Assert - Check the result
          expect(locations.length).toBeGreaterThanOrEqual(1);
          expect(locations[0].unit).not.toEqual(undefined);
          expect(locations[0].building).not.toEqual(undefined);
          expect(locations[0].street).not.toEqual(undefined);
          expect(locations[0].city).not.toEqual(undefined);
          expect(locations[0].region).not.toEqual(undefined);
          expect(locations[0].country).not.toEqual(undefined);
          expect(locations[0].address_code).not.toEqual(undefined);
         // expect(locations[0].quantity).not.toEqual(undefined);
        });
      });
    })));

  it('AddLocation() should add a new item if token is valid', async (inject([LocationsService], (service: LocationsService) => {
    const newLocation = new Location();
   // newLocation. = 'Cool Item';
    newLocation.unit = '3';
    newLocation.building = '4';
    newLocation.city = 'test city';
    newLocation.region = 'region 34';
    newLocation.country = '8';
    newLocation.address_code = '3';
    // service.addItem(newItem);


  })));

  // it('getItems() should return null when token is invalid', async(inject([ItemsService], (service: ItemsService) => {
  //   // Arrange - Define the class
  //   localStorage.clear();
  //   // Act - Call the method
  //   service.getItems().subscribe((items: Item[]) => {
  //     // Assert - Check the result
  //     console.log('getItems: ', items);
  //     expect(items).toEqual(null);
  //   });
  // })));
});
