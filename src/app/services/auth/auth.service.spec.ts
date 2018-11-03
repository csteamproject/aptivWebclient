import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';
import {
  AuthService
} from './auth.service';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  User
} from 'src/app/classes/user/user';
import { IUserCredentials } from 'src/app/interfaces/iuser-credentials';

describe('AuthService', () => {
  const cred: IUserCredentials = {
    username: 'jsteele',
    password: 'abc444abc444'
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('Login function should return a good token', async (inject([AuthService], (service: AuthService) => {
    // Arrange - Define the class
    // Act - Call the method
    service.login(cred).subscribe((u: User) => {
      const user: User = u;
      console.log('Login Test user: ', user);
      // Assert - Check the result
      expect(user.success).toEqual(true);
    });

  })));

  it('Login function should return a login error due to bad pwd', async (inject([AuthService], (service: AuthService) => {
    // Arrange - Define the class
    const BadCred: IUserCredentials = {
      username: 'jsteele',
      password: 'crap'
    };

    // Act - Call the method
    service.login(BadCred).subscribe((u: User) => {
      const user: User = u;
      console.log('Login Test user: ', user);
      // Assert - Check the result
      expect(user.success).toEqual(false);
    });
  })));

  it('Login function should set Local Storage CurrentUser on good password', async (inject([AuthService], (service: AuthService) => {
    // Arrange - Define the class
    localStorage.removeItem('CurrentUser');
    // Act - Call the method
    console.log('cred: ', cred);
    service.login(cred).subscribe((u: User) => {
      // let user: User;
      // console.log('Login Test user: ', user);
      const lsuser = localStorage.getItem('CurrentUser');
      console.log('lsuser: ', lsuser);
      const user = User.Deseralize(lsuser);
      console.log('user: ', user);
      // Assert - Check the result
      expect(lsuser).not.toBeNull();
      expect(user.first).toEqual('Jonathan');
    });
  })));

  it('Logout function should logout', async (inject([AuthService], (service: AuthService) => {
    // Arrange - Define the class
    service.login(cred).subscribe(() => {
      // Act - Call the method
      service.logout().subscribe(() => {
        const lsuser = localStorage.getItem('CurrentUser');
        // Assert - Check the result
        expect(lsuser).toBeNull();
      });
    });
  })));

  it('getCurrentUser function should return a User', async (inject([AuthService], (service: AuthService) => {
    // Arrange - Define the class
    service.login(cred).subscribe(() => {
      // Act - Call the method
      const currentUser: User = service.getCurrentUser();
      // Assert - Check the result
      expect(currentUser instanceof User).toEqual(true);
    });
  })));
});
