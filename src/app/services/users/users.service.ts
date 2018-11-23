import {
    Injectable
  } from '@angular/core';
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
  export class UsersService {

    constructor(private http: HttpClient) {}

    // This Service Function gets all the Users from the API
    getUser(): Observable < User[] > {
      return Observable.create(observer => {
        const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
        const httpOptions = {
          headers: new HttpHeaders({
            'jwt-token': currentUser.token
          })
        };

        this.http.get(environment.baseURL + 'users', httpOptions)
          .subscribe((users: User[]) => {
            observer.next(users);
            observer.complete();
          });
      });
    }

    // This Service Function adds a new User to the API
    addUser(user: any) {
      console.log('user: ', user);
      return Observable.create(observer => {
        const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
        const httpOptions = {
          headers: new HttpHeaders({
            'jwt-token': currentUser.token
          })
        };
        let newUser = {};

          newUser = {
            first: user.First,
            last: user.Last,
          };


        console.log('newUser: ', newUser);
        this.http.post(environment.baseURL + 'users', newUser, httpOptions)
          .subscribe((addedUser: any) => {
              console.log('Success: ', addedUser);
              observer.next(addedUser);
              observer.complete();
          }, error => {
            console.log('Error');
            observer.next(error);
            observer.complete();
          });
      });
    }

    // This Service Function edits an existing User from an API
    editUser(user: any) {
      console.log('UserService editUser user: ', User);
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };
      const UpdatedUser = {
        first: user.First,
        last: user.Last,
      };

      this.http.patch(environment.baseURL + 'users/' + user.First, UpdatedUser, httpOptions)
        .subscribe(() => {
          console.log('Success');
        }, error => {
          console.log('Error');
        });
    }

    // This Service Hard Deletes an existing User from an API
    deleteUser(first: string) {
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };

      this.http.delete(environment.baseURL + 'users/' + first, httpOptions)
        .subscribe(() => {
          console.log('Success');
        }, error => {
          console.log('Error');
        });
    }
  }
