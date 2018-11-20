import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AptivLocationsTableComponent
} from './aptiv-locations-table.component';
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
  AddLocationModalComponent
} from '../add-location-modal/add-location-modal.component';
import {
  EditLocationModalComponent
} from '../edit-location-modal/edit-location-modal.component';
import {
  DeleteLocationModalComponent
} from '../delete-location-modal/delete-location-modal.component';
import {
  ExcelService
} from '../../../services/excel/excel.service';

describe('AptivLocationsTableComponent', () => {
  let component: AptivLocationsTableComponent;
  let fixture: ComponentFixture < AptivLocationsTableComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AptivLocationsTableComponent,
          AddLocationModalComponent,
          EditLocationModalComponent,
          DeleteLocationModalComponent
        ],
        providers: [
          ExcelService
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptivLocationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Write a testcase to check and make sure all data is being passed in properly to the aptiv-table component
});
