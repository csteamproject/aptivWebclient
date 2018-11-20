import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  DeleteModalComponent
} from './delete-modal.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  FormsModule
} from '@angular/forms';
import {
  AptivInventoryTableComponent
} from '../aptiv-inventory-table/aptiv-inventory-table.component';
import {
  AddItemModalComponent
} from '../add-item-modal/add-item-modal.component';
import {
  EditItemModalComponent
} from '../edit-item-modal/edit-item-modal.component';
import {
  ExcelService
} from 'src/app/services/excel/excel.service';

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture < DeleteModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [DeleteModalComponent, AddItemModalComponent, EditItemModalComponent],
        providers: [AptivInventoryTableComponent, ExcelService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
