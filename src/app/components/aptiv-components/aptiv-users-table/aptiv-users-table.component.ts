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

@Component({
  selector: 'app-aptiv-users-table',
  templateUrl: './aptiv-users-table.component.html',
  styleUrls: ['./aptiv-users-table.component.css']
})
export class AptivUsersTableComponent implements OnInit {
  itemsPerPage: number;
  DataValue: Object[] = [];
  @Input()
  // @Output() DataEvent = new EventEmitter();
  get Data(): any[] {
    return this.DataValue;
  }
  set Data(data) {
    this.DataValue = data;
    this.Data.forEach((row: Object) => {
      console.log('aptiv-table: row -- ', row);
      this.CollectKeysOfObj(row);
    });
    this.BeforeFilterationData = this.DataValue;
    this.setPage(1);
    // Setup FormData
    this.Keys.forEach((key) => {
      const newKey = {
        key: key,
        value: null,
      };
      this.FormsData.push(newKey);
    });
    console.log('SetupFormData: ', this.FormsData);
    // this.DataValueChange.emit(this.DataValue);
  }

  BeforeFilterationData: Object[] = [];

  pager: any = {};
  pagedData: Object[] = [];
  allFilter: string;
  Keys: string[] = [];
  FormsData: Object[] = [];

  constructor(private pagerService: PageinationService) {
    this.itemsPerPage = pagerService.itemsPerPage;
  }

  ngOnInit() {}

  get self() { // Used for getting a unique ngModel
    return this;
  }

  public CollectKeysOfObj(obj) {
    for (const key of Object.keys(obj)) {

      // Grab Key Name and store it into the Keys Array.
      if (!this.Keys.includes(key)) {
        this.Keys.push(key);
      }

      // Call Function again if there are other Keys within an inner array of a data row.
      if (obj[key] instanceof Object) {
        this.CollectKeysOfObj(obj[key]);
      }
    }
  }

  filterCol(filter: any, key: any) {
    this.DataValue = this.BeforeFilterationData;
    this.DataValue = this.DataValue.filter(data => {
      if (data[key].length === undefined) {
        if (filter === '') {
          return true;
        }
        const filterNumb: number = Number(filter);
        if (data[key] === filterNumb) {
          return true;
        }
      } else if (data[key].indexOf(filter) >= 0) {
        return true;
      } else {
        return false;
      }
    });
    this.setPage(1);
  }

  filterAll(filter: any) {
    this.DataValue = this.BeforeFilterationData;
    this.DataValue = this.DataValue.filter(data => {
      let checkFlag = false;
      this.Keys.forEach((key) => {
        if (data[key].length === undefined) {
          if (data[key] === filter) {
            checkFlag = true;
          }
        } else if (data[key].indexOf(filter) >= 0) {
          checkFlag = true;
        }
      });
      return checkFlag;
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
    console.log('this.pagedData= ', this.pagedData);
  }
  changeItemsPerPage() {
    this.pagerService.itemsPerPage = this.itemsPerPage;
  }
}
