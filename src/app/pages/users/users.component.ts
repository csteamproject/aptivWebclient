import {
  Component,
  OnInit
} from '@angular/core';
import {
  UsersService
} from '../../services/users/users.service';
import {
  Webuser
} from '../../classes/web-user/web-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Webusers: Webuser[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getWebuser().subscribe((data: Webuser[]) => {
      this.Webusers = data;
    });
  }
}
