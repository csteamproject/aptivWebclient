import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserToken } from '../../classes/user-token';
import { User } from '../../classes/user/user';

export class Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    credentials: Credentials;

    constructor(public http: HttpClient) {
      this.credentials = {
        username: null,
        password: null
      };
    }

    public login(credentials: Credentials) {
      console.log('login(): credentials -- ', credentials);
      if (credentials.username === null || credentials.password === null) {
        return Observable.throw('Please insert credentials');
      } else {
        return Observable.create(observer => {
          console.log('login().observable: in the Observable');
          const httpOptions = {
            headers: new HttpHeaders({
              'username': credentials.username,
              'password': credentials.password
            })
          };

          this.http.post('http://0.0.0.0:3000/sessions', null, httpOptions)
          .subscribe((data: UserToken) => {
              console.log('WORKS: ', data);
              let currentUser = new User();

              currentUser = new User();
              currentUser.token = data;
              localStorage.setItem('CurrentUser', currentUser.Serialize());

              observer.next(data); // and then return data
              observer.complete();
            }, error => {
              console.log('error: ', error);
              observer.error(error); // and then return data
              observer.complete();
            });
        });
      }
    }

    public getCurrentUser(): User {
      let currentUser: User;
      const jUser = JSON.parse(localStorage.getItem('CurrentUser'));
      if (jUser) {
        currentUser = User.Deseralize(jUser);
      }
      return currentUser;
    }

    public logout() {
      return Observable.create(observer => {
        // this.currentUser = null;
        observer.next();
        observer.complete();
      });
    }
}
