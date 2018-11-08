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

describe('AddItemModalComponent', () => {
  let component: AddItemModalComponent;
  let fixture: ComponentFixture < AddItemModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [AddItemModalComponent]
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
