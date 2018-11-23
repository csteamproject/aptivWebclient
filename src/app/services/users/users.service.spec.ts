import {
    TestBed,
    inject,
    async
  } from '@angular/core/testing';

  import {
    UsersService
  } from './users.service';
  import {
    User
  } from '../../classes/user/user';
  import {
    HttpClientModule
  } from '@angular/common/http';
  import {
    AuthService
  } from '../auth/auth.service';
  import { IUser } from 'src/app/interfaces/iuser';

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
         auth.login({username: 'jsteele', password: 'abc444abc444'}).subscribe((user: IUser) => {
           // Act - Call the method
           service.getUser().subscribe((users: User[]) => {
             // Assert - Check the result
             expect(users.length).toBeGreaterThanOrEqual(1);
             expect(users[0].first).not.toEqual(undefined);
             expect(users[0].last).not.toEqual(undefined);
           });
         });
       })));

    // it('AddWebuser() should add a new user if token is valid', async (inject([UsersService], (service: UsersService) => {
    //   const newUser = new Webuser();
    //   newUser.First = 'Jane';
    //   newUser.Last = 'Does';
    // })));

    // it('getUsers() should return null when token is invalid', async(inject([UserService], (service: UserService) => {
    //   // Arrange - Define the class
    //   localStorage.clear();
    //   // Act - Call the method
    //   service.getUsers().subscribe((users: User[]) => {
    //     // Assert - Check the result
    //     console.log('getUsers: ', users);
    //     expect(users).toEqual(null);
    //   });
    // })));
  });
