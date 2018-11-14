import {Component, Input} from '@angular/core';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';
import { Location } from 'src/app/classes/location/location';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { AptivLocationsTableComponent } from '../aptiv-locations-table/aptiv-locations-table.component';

@Component({
  selector: 'app-edit-location-modal',
  templateUrl: './edit-location-modal.component.html',
  styleUrls: ['./edit-location-modal.component.css']
})
export class EditLocationModalComponent {

  EditDataValue: Location = new Location();
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get EditData(): Location {
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
  EditLocationData: Object = {};

  constructor(private modalService: NgbModal,
    private http: HttpClient,
    private locationService: LocationsService,
    private AptivLocationTblComp: AptivLocationsTableComponent ) {}

  get self() { // Used for getting a unique ngModel
    return this;
  }

  open(content) {
    console.log('OPEN: ', this.EditDataValue, this.KeysValue);
    this.KeysValue.forEach((Row) => {
      this.EditLocationData[Row.key] = this.EditDataValue[Row.key];
    });
    console.log('EditLocationData: ', this.EditLocationData);
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

  EditLocation(EditData: Location) {
    console.log('EditData: ', EditData);
    this.locationService.editLocation(EditData);
    this.AptivLocationTblComp.refreshPage();
  }
}
