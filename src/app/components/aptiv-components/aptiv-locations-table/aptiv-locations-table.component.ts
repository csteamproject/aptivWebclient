import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PageinationService
} from 'src/app/services/pageination/pageination.service';
import {
  ExcelService
} from '../../../services/excel/excel.service';
export class RowData {
  public DataColumn: any[];
}

export class FilterObj {
  all: string;
  id: string;
  unit: string;
  building: string;
  city: string;
  street: string;
  region: string;
  address_code: string;
  country: string;


}

@Component({
  selector: 'app-aptiv-locations-table',
  templateUrl: './aptiv-locations-table.component.html',
  styleUrls: ['./aptiv-locations-table.component.css']
})
export class AptivLocationsTableComponent implements OnInit {
  itemsPerPage: number;
  filters: FilterObj = {
    all: null,
    id: null,
    unit: null,
    building: null,
    city: null,
    street: null,
    region: null,
    address_code: null,
    country: null
  };
  DataValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Data(): any[] {
    return this.DataValue;
  }
  set Data(data) {
    this.DataValue = data;
    // this.Data.forEach((row: Object) => {
    //   this.CollectKeysOfObj(row);
    // });
    this.BeforeFilterationData = this.DataValue;
    this.UntouchedData = this.DataValue;
    this.setPage(1);
    // Setup FormData
    // this.Keys.forEach((key) => {
    //   const newKey = {
    //     key: key,
    //     value: null,
    //   };
    //   this.FormsData.push(newKey);
    // });
    // this.DataValueChange.emit(this.DataValue);
  }

  BeforeFilterationData: Object[] = [];
  UntouchedData: Object[] = [];

  pager: any = {};
  pagedData: Object[] = [];
  allFilter: string;

  Keys: string[] = [];

  FormsData: Object[] = [];

  constructor(private pagerService: PageinationService, private excelService: ExcelService) {
    this.itemsPerPage = pagerService.itemsPerPage;
  }

  ngOnInit() {}

  // get self() { // Used for getting a unique ngModel
  //   return this;
  // }

  // public CollectKeysOfObj(obj) {
  //   for (const key of Object.keys(obj)) {

  //     // Grab Key Name and store it into the Keys Array.
  //     if (!this.Keys.includes(key)) {
  //       this.Keys.push(key);
  //     }

  //     // Call Function again if there are other Keys within an inner array of a data row.
  //     if (obj[key] instanceof Object) {
  //       this.CollectKeysOfObj(obj[key]);
  //     }
  //   }
  // }

exportAsXLSX(): void {
  this.excelService.exportAsExcelFile(this.Data, 'sample');
}
  filter() {
    this.DataValue = this.BeforeFilterationData;
    this.DataValue = this.DataValue.filter(data => {
      let FlagTF = false;
      if ((this.filters.all === null || this.filters.all === '') &&
      (this.filters.id === null || this.filters.id === '') &&
      (this.filters.unit === null || this.filters.unit === '') &&
      (this.filters.building === null || this.filters.building === '') &&
      (this.filters.city === null || this.filters.city === '') &&
      (this.filters.street === null || this.filters.street === '') &&
      (this.filters.region === null || this.filters.region === '') &&
      (this.filters.address_code === null || this.filters.address_code === '') &&
      (this.filters.country === null || this.filters.country === '')) {
        FlagTF = true;
      } else {
        if (this.filters.all !== null && this.filters.all !== '') {
          // if (data['id'] === Number(this.filters.all)) {
          if (data['id'].toString().indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['unit'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['building'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['city'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['street'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['region'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['address_code'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['region'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (!FlagTF) {
            return false;
          }
        }
        if (this.filters.id !== null && this.filters.id !== '') {
          // if (data['id'] === Number(this.filters.id)) {
          if (data['id'].toString().indexOf(this.filters.id) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.unit !== null && this.filters.unit !== '') {
          if (data['unit'].indexOf(this.filters.unit) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.building !== null && this.filters.building !== '') {
          if (data['building'].indexOf(this.filters.building) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.street !== null && this.filters.street !== '') {
          // if (data['quantity'] === Number(this.filters.quantity)) {
          if (data['street'].indexOf(this.filters.street) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.city !== null && this.filters.city !== '') {
          // if (data['quantity'] === Number(this.filters.quantity)) {
          if (data['city'].indexOf(this.filters.city) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.region !== null && this.filters.region !== '') {
          // if (data['quantity'] === Number(this.filters.quantity)) {
          if (data['region'].toString().indexOf(this.filters.region) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.country !== null && this.filters.country !== '') {
          // if (data['quantity'] === Number(this.filters.quantity)) {
          if (data['country'].toString().indexOf(this.filters.country) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.address_code !== null && this.filters.address_code !== '') {
          // if (data['quantity'] === Number(this.filters.quantity)) {
          if (data['address_code'].toString().indexOf(this.filters.address_code) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
      }
      return FlagTF;
    });
    this.setPage(1);
  }

  transform(locations: any[], field: string, value: string): any[] {
    if (!locations) {
      return [];
    }
    return locations.filter(it => it[field] === value);
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.DataValue.length, page);
    this.pagedData = this.DataValue.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  refreshPage() {
    this.pager = this.pagerService.getPager(this.DataValue.length, this.pager.currentPage);
    this.pagedData = this.DataValue.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  changeItemsPerPage() {
    this.pagerService.itemsPerPage = this.itemsPerPage;
  }
}
