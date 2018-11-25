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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  LoginError: Number = -1;
  constructor(private router: Router,
    public auth: AuthService) {}

  /**
   * This method will call the login service method which will request a login token
   *  with the passed credentials from the sessions controller on the API
   * @param credentials will be the passed username and password object from the login page.
   */
  TryToLogin(credentials) {
    this.auth.login(credentials).subscribe(data => {
        this.router.navigate(['inventory']);
        this.LoginError = 0;
      if (this.LoginError !== 1) {
          this.LoginError = 0;
        }
    });
  }
}
