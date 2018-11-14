import {
    Injectable
  } from '@angular/core';
  import {
    Webuser
  } from '../../classes/web-user/web-user';
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
    getWebuser(): Observable < Webuser[] > {
      return Observable.create(observer => {
        const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
        const httpOptions = {
          headers: new HttpHeaders({
            'jwt-token': currentUser.token
          })
        };

        this.http.get(environment.baseURL + 'users', httpOptions)
          .subscribe((webusers: Webuser[]) => {
            observer.next(webusers);
            observer.complete();
          });
      });
    }

    // This Service Function adds a new User to the API
    addWebuser(webuser: any) {
      console.log('user: ', webuser);
      return Observable.create(observer => {
        const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
        const httpOptions = {
          headers: new HttpHeaders({
            'jwt-token': currentUser.token
          })
        };
        let newWebuser = {};

          newWebuser = {
            first: webuser.First,
            last: webuser.Last,
            username: webuser.Username,
          };


        console.log('newUser: ', newWebuser);
        this.http.post(environment.baseURL + 'users', newWebuser, httpOptions)
          .subscribe((addedWebuser: any) => {
              console.log('Success: ', addedWebuser);
              observer.next(addedWebuser);
              observer.complete();
          }, error => {
            console.log('Error');
            observer.next(error);
            observer.complete();
          });
      });
    }

    // This Service Function edits an existing User from an API
    editWebuser(webuser: any) {
      console.log('UserService editUser user: ', webuser);
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };
      const UpdatedWebuser = {
        first: webuser.First,
        last: webuser.Last,
        username: webuser.Username
      };

      this.http.patch(environment.baseURL + 'users/' + webuser.First, UpdatedWebuser, httpOptions)
        .subscribe(() => {
          console.log('Success');
        }, error => {
          console.log('Error');
        });
    }

    // This Service Hard Deletes an existing User from an API
    deleteWebuser(first: string) {
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
