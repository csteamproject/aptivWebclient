import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/classes/user/user';
import { AptivUsersTableComponent } from '../aptiv-users-table/aptiv-users-table.component';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent {

  DataValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Data(): any[] {
    return this.DataValue;
  }
  set Data(data) {
    this.DataValue = data;
  }
 AddData: User = new User();

  closeResult: string;

  constructor(private modalService: NgbModal,
     private UserService: UsersService,
     private AptivUserTblComp: AptivUsersTableComponent) {}

  open(content) {
    this.AddData = new User();
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

  SaveResults() {
    this.UserService.addUser(this.AddData).subscribe((newUser: User) => {
      this.DataValue.push(newUser);
      this.AptivUserTblComp.filter();
      this.AptivUserTblComp.refreshPage();
    });
  }
}
