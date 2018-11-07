import {Component, Input} from '@angular/core';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from 'src/app/classes/user/user';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  KeysValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Keys(): any[] {
    return this.KeysValue;
  }
  set Keys(data) {
    this.KeysValue = data;
  }

  closeResult: string;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  open(content) {
    console.log('OPEN: ', this.KeysValue);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SaveResults(KeysData: any) {
    console.log('KeysData: ', KeysData);

    // TODO: Move this to a separate service and have a way to make it dynamic

    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };
    const newItem = {
      name: KeysData[0].value,
      price: KeysData[1].value,
      quantity: KeysData[2].value
    };

    this.http.post(environment.baseURL + 'items', newItem, httpOptions)
    .subscribe(() => {
      console.log('Success');
    }, error => {
      console.log('Error');
    });

  }
}
