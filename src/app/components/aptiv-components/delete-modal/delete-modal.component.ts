import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from 'src/app/classes/user/user';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  KeyValue = 0;
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Key(): any {
    return this.KeyValue;
  }
  set Key(data) {
    this.KeyValue = data;
  }

  closeResult: string;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  open(content) {
    // console.log('OPEN: ', this.KeyValue);
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

  Delete(Key: any) {
    console.log('KeysData: ', Key);

    // TODO: Move this to a separate service and have a way to make it dynamic

    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };

    this.http.delete(environment.baseURL + 'items/' + Key, httpOptions)
    .subscribe(() => {
      console.log('Success');
    }, error => {
      console.log('Error');
    });

  }
}
