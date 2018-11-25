import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';
import {
  UsersService
} from './users.service';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AuthService
} from '../auth/auth.service';
import {
  IUser
} from 'src/app/interfaces/iuser';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, AuthService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('getUser() should return at least 1 user when token is valid', async (inject([UsersService, AuthService],
    (service: UsersService, auth: AuthService) => {
      // Arrange - Define the class
      auth.login({
        username: 'jsteele',
        password: 'abc444abc444'
      }).subscribe((user: IUser) => {
        // Act - Call the method
        service.getUser().subscribe((users: any[]) => {
          // Assert - Check the result
          expect(users.length).toBeGreaterThanOrEqual(1);
          expect(users[0].first_name).not.toEqual(undefined);
          expect(users[0].last_name).not.toEqual(undefined);
        });
      });
    })));
});
