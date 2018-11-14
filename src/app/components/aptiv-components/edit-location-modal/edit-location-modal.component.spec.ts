import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  EditLocationModalComponent
} from './edit-location-modal.component';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  FormsModule
} from '@angular/forms';
import { AddLocationModalComponent } from '../add-location-modal/add-location-modal.component';
import { DeleteLocationModalComponent } from '../delete-location-modal/delete-location-modal.component';
import { AptivLocationsTableComponent } from '../aptiv-locations-table/aptiv-locations-table.component';

describe('EditLocationModalComponent', () => {
  let component: EditLocationModalComponent;
  let fixture: ComponentFixture < EditLocationModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [EditLocationModalComponent, AddLocationModalComponent, DeleteLocationModalComponent],
        providers: [AptivLocationsTableComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
