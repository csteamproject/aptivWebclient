import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';

import {
  ItemsService
} from './items.service';
import {
  Item
} from '../../classes/item/item';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AuthService
} from '../auth/auth.service';
import { IUser } from 'src/app/interfaces/iuser';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService, AuthService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('getItems() should return at least 1 item when token is valid', async (inject([ItemsService, AuthService],
    (service: ItemsService, auth: AuthService) => {
      // Arrange - Define the class
      auth.login({username: 'jsteele', password: 'abc444abc444'}).subscribe((user: IUser) => {
        // Act - Call the method
        service.getItems().subscribe((items: Item[]) => {
          // Assert - Check the result
          expect(items.length).toBeGreaterThanOrEqual(1);
          expect(items[0].name).not.toEqual(undefined);
          expect(items[0].price).not.toEqual(undefined);
          expect(items[0].quantity).not.toEqual(undefined);
        });
      });
    })));

  it('AddItem() should add a new item if token is valid', async (inject([ItemsService], (service: ItemsService) => {
    const newItem = new Item();
    newItem.name = 'Cool Item';
    newItem.price = 3.99;
    newItem.quantity = 4;
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
