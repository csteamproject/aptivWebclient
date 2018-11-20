import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/services/items/items.service';
import { Item } from 'src/app/classes/item/item';
import { Computer } from 'src/app/classes/computer/computer';
import { AptivInventoryTableComponent } from '../aptiv-inventory-table/aptiv-inventory-table.component';

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
  ComputerTF = false;
  AddData: Item = new Item();
  Computer: Computer = new Computer();

  closeResult: string;

  constructor(private modalService: NgbModal,
     private itemService: ItemsService,
     private AptivInventoryTblComp: AptivInventoryTableComponent) {}

  ComputerTFChanged() {
    if (this.ComputerTF) {
      this.ComputerTF = false;
    } else {
      this.ComputerTF = true;
    }
  }

  open(content) {
    this.AddData = new Item();
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

  SaveResults() {
    console.log('SaveResults-AddData: ', this.AddData);
    if (this.ComputerTF) {
      this.AddData.Computer = this.Computer;
    }
    this.AddData.Checked_out = false;

    this.itemService.addItem(this.AddData).subscribe((newItem: Item) => {
      this.DataValue.push(newItem);
      this.AptivInventoryTblComp.filter();
      this.AptivInventoryTblComp.refreshPage();
    });
  }
}
