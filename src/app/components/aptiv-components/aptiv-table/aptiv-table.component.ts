import {
  Component,
  OnInit,
  Input
} from '@angular/core';

export class RowData {
  public DataColumn: any[];
}

@Component({
  selector: 'app-aptiv-table',
  templateUrl: './aptiv-table.component.html',
  styleUrls: ['./aptiv-table.component.css']
})
export class AptivTableComponent implements OnInit {

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
    // this.DataValueChange.emit(this.DataValue);
  }

  private Keys: string[] = [];

  constructor() {}

  ngOnInit() {
    // console.log('aptiv-table: Data -- ', this.Keys, this.Data);
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
}
