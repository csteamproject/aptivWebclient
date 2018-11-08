import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/services/items/items.service';
import { Item } from 'src/app/classes/item/item';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {

  DataValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Data(): any[] {
    return this.DataValue;
  }
  set Data(data) {
    this.DataValue = data;
  }

  AddData: Item = new Item();

  closeResult: string;

  constructor(private modalService: NgbModal, private itemService: ItemsService) {}

  open(content) {
    console.log('OPEN: ', this.DataValue);
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

  SaveResults(AddData: any) {
    console.log('KeysData: ', AddData);

    this.itemService.addItem(AddData).subscribe((newItem: Item) => {
      console.log('addItem service AddedData: ', newItem);
      // const refreshedItems = this.Data;
      // refreshedItems.push(newItem);
      // const items: Item[] = Item.DeseralizeMany(refreshedItems.map((obj: Item) => ({
      //   ID: obj.id,
      //   Name: obj.name,
      //   Price: obj.price,
      //   Quantity: obj.quantity
      // })));
      // this.Data = items;
      // console.log('Data: ', this.Data);
    });
  }
}
