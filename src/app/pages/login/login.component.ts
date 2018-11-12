import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from '../../services/auth/auth.service';
import {
  HttpClient
} from '@angular/common/http';
import {
  ItemsService
} from '../../services/items/items.service';
import {
  Item
} from '../../classes/item/item';
import { ReturnStatement } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  LoginError: Number = 1;
  constructor(private router: Router,
    public auth: AuthService) {}

  ngOnInit() {}
  TryToLogin(credentials) {
    this.auth.login(credentials).subscribe(data => {
      // console.log('LoginComponent: ', data);
      // if (true) { // TODO: Add a Checkbox to see if they want to be remembered for a period of time.
      //   localStorage.setItem('CurrentUser', JSON.stringify(data));
      // }
        this.router.navigate(['inventory']);
    });
    this.LoginError = 0;
  }
}
