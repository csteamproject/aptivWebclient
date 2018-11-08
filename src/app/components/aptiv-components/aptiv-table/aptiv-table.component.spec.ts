import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AptivTableComponent
} from './aptiv-table.component';
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
  AddModalComponent
} from '../add-modal/add-modal.component';
import {
  DeleteModalComponent
} from '../delete-modal/delete-modal.component';
import {
  EditItemModalComponent
} from '../edit-item-modal/edit-item-modal.component';

describe('AptivTableComponent', () => {
  let component: AptivTableComponent;
  let fixture: ComponentFixture < AptivTableComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AptivTableComponent,
          AddModalComponent,
          DeleteModalComponent,
          EditItemModalComponent
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptivTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Write a testcase to check and make sure all data is being passed in properly to the aptiv-table component
});
