import {
  Injectable
} from '@angular/core';
import {
  Developer
} from '../../classes/developer';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: HttpClient) {}

  getDevelopers() {
    return Observable.create(observer => {
      this.http.get('http://0.0.0.0:3000/developers')
        .subscribe((res: Developer[]) => {
          // let Result: Data[] = temp;
          const Developers: Developer[] = res;
          console.log('data: ', Developers);

          observer.next(Developers);
          observer.complete();
        }, (error) => {
          const Developer1: Developer = ({
            id: 1,
            name: 'Jonathan Steele',
            role: 'Programmer',
            updated_at: new Date('8/30/2018')
          });
          const Developer2: Developer = ({
            id: 2,
            name: 'Zachary Morgan',
            role: 'Programmer',
            updated_at: new Date('8/30/2018')
          });
          const Developer3: Developer = ({
            id: 3,
            name: 'Gilbert Carrillo',
            role: 'Programmer',
            updated_at: new Date('8/30/2018')
          });
          const TestDevelopers: Developer[] = [];
          TestDevelopers.push(Developer1);
          TestDevelopers.push(Developer2);
          TestDevelopers.push(Developer3);

          observer.next(TestDevelopers);
          observer.complete();
        });
    });
  }
}
