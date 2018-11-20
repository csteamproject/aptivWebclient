import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AddItemModalComponent
} from './add-item-modal.component';
import {
  FormsModule
} from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AptivInventoryTableComponent
} from '../aptiv-inventory-table/aptiv-inventory-table.component';
import {
  EditItemModalComponent
} from '../edit-item-modal/edit-item-modal.component';
import {
  DeleteModalComponent
} from '../delete-modal/delete-modal.component';
import {
  ExcelService
} from 'src/app/services/excel/excel.service';

describe('AddItemModalComponent', () => {
  let component: AddItemModalComponent;
  let fixture: ComponentFixture < AddItemModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AddItemModalComponent,
          AptivInventoryTableComponent,
          EditItemModalComponent,
          DeleteModalComponent
        ],
        providers: [AptivInventoryTableComponent, ExcelService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
