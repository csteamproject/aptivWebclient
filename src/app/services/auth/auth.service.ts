import {
  Injectable, OnInit
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  UserToken
} from '../../classes/user-token';
import {
  User
} from '../../classes/user/user';
import {
  environment
} from 'src/environments/environment';

export class Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials: Credentials;
  CurrentUser: User = this.getCurrentUser();

  constructor(public http: HttpClient) {
    this.credentials = {
      username: null,
      password: null
    };
  }

  public login(credentials: Credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw('Please insert credentials');
    } else {
      return Observable.create(observer => {
        const httpOptions = {
          headers: new HttpHeaders({
            'username': credentials.username,
            'password': credentials.password
          })
        };
        // If Testing just return a token if the user exists in the Users.json
        if (!environment.testing) {
          // 'http://0.0.0.0:3000/sessions'
          this.http.post(environment.baseURL + 'sessions', null, httpOptions)
            .subscribe((data: UserToken) => {
              console.log('WORKS: ', data);
              const currentUser = new User();
              currentUser.username = credentials.username; // TODO: might want the username from the API
              currentUser.token = data;
              this.CurrentUser = currentUser;
              localStorage.setItem('CurrentUser', currentUser.Serialize());
              observer.next(data); // and then return data
              observer.complete();
            }, error => {
              console.log('error: ', error);
              observer.error(error); // and then return data
              observer.complete();
            });
        } else {
          this.http.get(environment.baseURL + 'Users.json')
            .subscribe((data: User[]) => {
              const SearchedUser: User = data.find(u =>
                u.username === httpOptions.headers.get('username') &&
                u.password === httpOptions.headers.get('password'));
              if (SearchedUser) {
                const currentUser = new User();
                currentUser.username = SearchedUser.username;
                currentUser.token = {
                  'success': true,
                  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
                    '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
                };
                this.CurrentUser = currentUser;
                localStorage.setItem('CurrentUser', currentUser.Serialize());
                observer.next(currentUser.token); // and then return data
                observer.complete();
              }
            });
        }
      });
    }
  }

  public getCurrentUser(): User {
    console.log('GetCurrentUser Called!!');
    let currentUser: User;
    const jUser = JSON.parse(localStorage.getItem('CurrentUser'));
    if (jUser) {
      currentUser = User.Deseralize(jUser);
    }
    return currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      observer.next();
      observer.complete();
    });
  }
}
