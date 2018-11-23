import {
  Component,
  OnInit
} from '@angular/core';
import {
  UsersService
} from '../../services/users/users.service';
import {
  User
} from '../../classes/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users: User[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUser().subscribe((data: User[]) => {
      console.log('users.getUsers: ', data);
      this.Users = data;
    });
  }
}
