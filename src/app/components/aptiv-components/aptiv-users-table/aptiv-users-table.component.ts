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
  first: string;
  last: string;
  username:string;
  all: string;
}

@Component({
  selector: 'app-aptiv-users-table',
  templateUrl: './aptiv-users-table.component.html',
  styleUrls: ['./aptiv-users-table.component.css']
})
export class AptivUsersTableComponent implements OnInit {
  itemsPerPage: number;
  filters: FilterObj = {
    all: null,
    first: null,
    last: null,
    username: null,
  };
  DataValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Data(): any[] {
    console.log('getting user data: ', this.DataValue);
    return this.DataValue;
  }
  set Data(data) {
    this.DataValue = data;
    console.log('setting user data: ', this.DataValue);
    this.BeforeFilterationData = this.DataValue;
    this.UntouchedData = this.DataValue;
    this.setPage(1);
  }

  BeforeFilterationData: Object[] = [];
  UntouchedData: Object[] = [];

  pager: any = {};
  pagedData: Object[] = [];
  allFilter: string;
  Keys: string[] = [];
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
      (this.filters.first === null || this.filters.first === '') &&
      (this.filters.last === null || this.filters.last === '')  &&
      (this.filters.username === null || this.filters.username === '')){
        FlagTF = true;
      } else {
        if (this.filters.all !== null && this.filters.all !== '') {
          if (data['first'].toString().indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (data['last'].indexOf(this.filters.all) >= 0) {
            FlagTF = true;
          }
          if (!FlagTF) {
            return false;
          }
        }
        if (this.filters.first !== null && this.filters.first !== '') {
          // if (data['id'] === Number(this.filters.id)) {
          if (data['first'].toString().indexOf(this.filters.first) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.last !== null && this.filters.last !== '') {
          if (data['last'].indexOf(this.filters.last) >= 0) {
            FlagTF = true;
          } else {
            return false;
          }
        }
        if (this.filters.username !== null && this.filters.username !== '') {
          if (data['username'].indexOf(this.filters.username) >= 0) {
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
