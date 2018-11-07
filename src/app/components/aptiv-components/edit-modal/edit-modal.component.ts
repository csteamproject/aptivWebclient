import {Component, Input} from '@angular/core';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from 'src/app/classes/user/user';
import { Item } from 'src/app/classes/item/item';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  RowDataValue: Item = new Item();
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get RowData(): Item {
    // console.log('KeyValue: ', this.RowDataValue);
    return this.RowDataValue;
  }
  set RowData(data) {
    this.RowDataValue = data;
    // console.log('KeyValue: ', this.RowDataValue);
  }

  KeysValue: any[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Keys(): any[] {
    return this.KeysValue;
  }
  set Keys(data) {
    this.KeysValue = data;
  }

  closeResult: string;
  EditItemData: Object = {};

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  get self() { // Used for getting a unique ngModel
    return this;
  }

  open(content) {
    console.log('OPEN: ', this.RowDataValue, this.KeysValue);
    this.KeysValue.forEach((Row) => {
      this.EditItemData[Row.key] = this.RowDataValue[Row.key];
    });
    console.log('EditItemData: ', this.EditItemData);
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

  EditKey(EditData: any) {
    console.log('EditData: ', EditData);

    // TODO: Move this to a separate service and have a way to make it dynamic

    const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'jwt-token': currentUser.token
      })
    };
    const UpdatedItem = {
      name: EditData[0].value,
      price: EditData[1].value,
      quantity: EditData[2].value
    };

    this.http.patch(environment.baseURL + 'items', UpdatedItem, httpOptions)
    .subscribe(() => {
      console.log('Success');
    }, error => {
      console.log('Error');
    });

  }
}
