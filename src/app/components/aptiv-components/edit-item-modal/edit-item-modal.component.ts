import {Component, Input} from '@angular/core';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';
import { Item } from 'src/app/classes/item/item';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent {

  EditDataValue: Item = new Item();
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get EditData(): Item {
    // console.log('KeyValue: ', this.RowDataValue);
    return this.EditDataValue;
  }
  set EditData(data) {
    this.EditDataValue = data;
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

  constructor(private modalService: NgbModal, private http: HttpClient, private itemService: ItemsService) {}

  get self() { // Used for getting a unique ngModel
    return this;
  }

  open(content) {
    console.log('OPEN: ', this.EditDataValue, this.KeysValue);
    this.KeysValue.forEach((Row) => {
      this.EditItemData[Row.key] = this.EditDataValue[Row.key];
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

  EditItem(EditData: Item) {
    console.log('EditData: ', EditData);

    this.itemService.editItem(EditData);
  }
}
