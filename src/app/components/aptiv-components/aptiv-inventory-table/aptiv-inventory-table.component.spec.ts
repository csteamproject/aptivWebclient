import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AptivInventoryTableComponent
} from './aptiv-inventory-table.component';
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
  AddItemModalComponent
} from '../add-item-modal/add-item-modal.component';
import {
  DeleteModalComponent
} from '../delete-modal/delete-modal.component';
import {
  EditItemModalComponent
} from '../edit-item-modal/edit-item-modal.component';

describe('AptivTableComponent', () => {
  let component: AptivInventoryTableComponent;
  let fixture: ComponentFixture < AptivInventoryTableComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AptivInventoryTableComponent,
          AddItemModalComponent,
          DeleteModalComponent,
          EditItemModalComponent
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptivInventoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Write a testcase to check and make sure all data is being passed in properly to the aptiv-table component
});
