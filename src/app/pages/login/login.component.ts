import {
  Component,
  OnInit
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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    public auth: AuthService) {}

  ngOnInit() {}

  TryToLogin(credentials) {
    this.auth.login(credentials).subscribe(data => {
      console.log('LoginComponent: ', data);
      // if (true) { // TODO: Add a Checkbox to see if they want to be remembered for a period of time.
      //   localStorage.setItem('CurrentUser', JSON.stringify(data));
      // }
      this.router.navigate(['main']);
    });
  }
}
