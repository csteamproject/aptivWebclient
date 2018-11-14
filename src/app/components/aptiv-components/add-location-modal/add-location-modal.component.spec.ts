import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AddLocationModalComponent
} from './add-location-modal.component';
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
  AptivLocationsTableComponent
} from '../aptiv-locations-table/aptiv-locations-table.component';
import {
  EditLocationModalComponent
} from '../edit-location-modal/edit-location-modal.component';
import {
  DeleteLocationModalComponent
} from '../delete-location-modal/delete-location-modal.component';

describe('AddLocationModalComponent', () => {
  let component: AddLocationModalComponent;
  let fixture: ComponentFixture < AddLocationModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AddLocationModalComponent,
          AptivLocationsTableComponent,
          EditLocationModalComponent,
          DeleteLocationModalComponent
        ],
        providers: [AptivLocationsTableComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
