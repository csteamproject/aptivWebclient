import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PageinationService
} from 'src/app/services/pageination/pageination.service';

export class RowData {
  public DataColumn: any[];
}

export class FilterObj {
  all: string;
  id: string;
  name: string;
  price: string;
  quantity: string;
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
    id: null,
    name: null,
    price: null,
    quantity: null
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

  constructor(private pagerService: PageinationService) {
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

  filter() {
    this.DataValue = this.BeforeFilterationData;
    this.DataValue = this.DataValue.filter(data => {
      let FlagTF = false;
      if ((this.filters.all === null || this.filters.all === '') &&
      (this.filters.id === null || this.filters.id === '') &&
      (this.filters.name === null || this.filters.name === '') &&
      (this.filters.price === null || this.filters.price === '') &&
      (this.filters.quantity === null || this.filters.quantity === '')) {
        FlagTF = true;
      } else {
        if (this.filters.all !== null && this.filters.all !== '') {
          // if (data['id'] === Number(this.filters.all)) {
          if (data['id'].toString().indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['name'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['price'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['quantity'] === Number(this.filters.all)) {
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
        if (this.filters.name !== null && this.filters.name !== '') {
          if (data['name'].indexOf(this.filters.name) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.price !== null && this.filters.price !== '') {
          if (data['price'].indexOf(this.filters.price) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.quantity !== null && this.filters.quantity !== '') {
          // if (data['quantity'] === Number(this.filters.quantity)) {
          if (data['quantity'].toString().indexOf(this.filters.quantity) >= 0) {
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
