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
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: HttpClient) {}

  // 'http://0.0.0.0:3000/developers'
  getDevelopers() {
    return Observable.create(observer => {
      this.http.get(environment.baseURL + 'developers')
        .subscribe((res: Developer[]) => {
          // console.log('InventoryComponent --', res);
          // let Result: Data[] = temp;
          const Developers: Developer[] = res;
          // console.log('data: ', Developers);

          observer.next(Developers);
          observer.complete();
        }, (error) => {
          // console.log('There was an error', error);
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
