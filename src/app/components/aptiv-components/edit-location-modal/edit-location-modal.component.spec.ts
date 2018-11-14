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

describe('EditLocationModalComponent', () => {
  let component: EditLocationModalComponent;
  let fixture: ComponentFixture < EditLocationModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [EditLocationModalComponent]
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
