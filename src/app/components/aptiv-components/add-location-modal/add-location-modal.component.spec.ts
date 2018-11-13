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

describe('AddLocationModalComponent', () => {
  let component: AddLocationModalComponent;
  let fixture: ComponentFixture < AddLocationModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AddLocationModalComponent]
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
