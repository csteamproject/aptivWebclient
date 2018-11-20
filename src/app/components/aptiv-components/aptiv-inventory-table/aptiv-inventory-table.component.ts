import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PageinationService
} from 'src/app/services/pageination/pageination.service';
import { ExcelService } from '../../../services/excel/excel.service';

export class RowData {
  public DataColumn: any[];
}

export class FilterObj {
  all: string;
  name: string;
  serial_number: string;
  checked_out: string;
  user_id: string;
}

@Component({
  selector: 'app-aptiv-inventory-table',
  templateUrl: './aptiv-inventory-table.component.html',
  styleUrls: ['./aptiv-inventory-table.component.css']
})
export class AptivInventoryTableComponent implements OnInit {
  itemsPerPage: number;
  filters: FilterObj = {
    all: null,
    name: null,
    serial_number: null,
    checked_out: null,
    user_id: null
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
  // private Keys: string[] = [];
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
    this.excelService.exportAsExcelFile(this.Data, 'inventory');
  }
  filter() {
    this.DataValue = this.BeforeFilterationData;
    this.DataValue = this.DataValue.filter(data => {
      let FlagTF = false;
      if ((this.filters.all === null || this.filters.all === '') &&
      (this.filters.name === null || this.filters.name === '') &&
      (this.filters.serial_number === null || this.filters.serial_number === '') &&
      (this.filters.checked_out === null || this.filters.checked_out === '') &&
      (this.filters.user_id === null || this.filters.user_id === '')) {
        FlagTF = true;
      } else {
        if (this.filters.all !== null && this.filters.all !== '') {
          // if (data['id'] === Number(this.filters.all)) {
          if (data['name'].toString().indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['serial_number'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['checked_out'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['user_id'] === Number(this.filters.all)) {
            FlagTF = true;
          }
          if (!FlagTF) {
            return false;
          }
        }
        if (this.filters.name !== null && this.filters.name !== '') {
          // if (data['id'] === Number(this.filters.id)) {
          if (data['name'].toString().indexOf(this.filters.name) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.serial_number !== null && this.filters.serial_number !== '') {
          if (data['serial_number'].indexOf(this.filters.serial_number) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.checked_out !== null && this.filters.checked_out !== '') {
          if (data['checked_out'].toString().indexOf(this.filters.checked_out) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.user_id !== null && this.filters.user_id !== '') {
          // if (data['user_id'] === Number(this.filters.user_id)) {
          if (data['user_id'].toString().indexOf(this.filters.user_id) >= 0) {
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

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    return items.filter(it => it[field] === value);
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
