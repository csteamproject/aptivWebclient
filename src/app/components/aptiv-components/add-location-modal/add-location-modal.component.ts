import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { Location } from 'src/app/classes/location/location';
import { AptivLocationsTableComponent } from '../aptiv-locations-table/aptiv-locations-table.component';

@Component({
  selector: 'app-add-location-modal',
  templateUrl: './add-location-modal.component.html',
  styleUrls: ['./add-location-modal.component.css']
})
export class AddLocationModalComponent {

  DataValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Data(): any[] {
    return this.DataValue;
  }
  set Data(data) {
    this.DataValue = data;
  }
 AddData: Location = new Location();

  closeResult: string;

  constructor(private modalService: NgbModal,
     private locationService: LocationsService,
     private AptivLocationTblComp: AptivLocationsTableComponent) {}

  open(content) {
    this.AddData = new Location();
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
    this.locationService.addLocation(this.AddData).subscribe((newLocation: Location) => {
      this.DataValue.push(newLocation);
      this.AptivLocationTblComp.refreshPage();
    });
  }
}
