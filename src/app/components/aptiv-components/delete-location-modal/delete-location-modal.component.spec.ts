import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  DeleteLocationModalComponent
} from './delete-location-modal.component';
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
  AptivLocationsTableComponent
} from '../aptiv-locations-table/aptiv-locations-table.component';
import {
  AddLocationModalComponent
} from '../add-location-modal/add-location-modal.component';
import {
  EditLocationModalComponent
} from '../edit-location-modal/edit-location-modal.component';
import {
  ExcelService
} from 'src/app/services/excel/excel.service';

describe('DeleteLocationModalComponent', () => {
  let component: DeleteLocationModalComponent;
  let fixture: ComponentFixture < DeleteLocationModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [DeleteLocationModalComponent, AddLocationModalComponent, EditLocationModalComponent],
        providers: [AptivLocationsTableComponent, ExcelService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
