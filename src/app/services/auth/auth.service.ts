import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  User
} from '../../classes/user/user';
import {
  environment
} from 'src/environments/environment';
import { IUserCredentials } from 'src/app/interfaces/iuser-credentials';
import { ILoginUser } from 'src/app/interfaces/ilogin-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials: IUserCredentials;
  CurrentUser: User = this.getCurrentUser();

  constructor(public http: HttpClient) {
    this.credentials = {
      username: null,
      password: null
    };
  }

  public login(credentials: IUserCredentials) {
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
            .subscribe((user: User) => {
              const currentUser = User.Deseralize(user);
              this.CurrentUser = currentUser;
              console.log('this.CurrentUser: ', this.CurrentUser);
              localStorage.setItem('CurrentUser', this.CurrentUser.Serialize());
              observer.next(user); // and then return data
              observer.complete();
            }, error => {
              console.log('error: ', error);
              observer.error(error); // and then return data
              observer.complete();
            });
        } else {
          this.http.get(environment.baseURL + 'Users.json')
            .subscribe((data: ILoginUser[]) => {
              const SearchedUser: ILoginUser = data.find(iu =>
                iu.username === httpOptions.headers.get('username') &&
                iu.password === httpOptions.headers.get('password'));
              if (SearchedUser) {
                const currentUser = new User();
                currentUser.first = SearchedUser.first;
                currentUser.last = SearchedUser.last;
                currentUser.role = SearchedUser.role;
                currentUser.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
                '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
                currentUser.success = true;
                this.CurrentUser = currentUser;
                localStorage.setItem('CurrentUser', currentUser.Serialize());
                observer.next(currentUser); // and then return data
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
    const jUser = localStorage.getItem('CurrentUser');
    if (jUser) {
      currentUser = User.Deseralize(jUser);
    }
    return currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      localStorage.clear();
      observer.next();
      observer.complete();
    });
  }
}
