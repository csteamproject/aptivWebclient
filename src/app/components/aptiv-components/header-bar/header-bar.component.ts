import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  Logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
