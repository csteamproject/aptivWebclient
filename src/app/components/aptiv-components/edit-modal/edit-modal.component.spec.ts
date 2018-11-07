import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  EditModalComponent
} from './edit-modal.component';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  FormsModule
} from '@angular/forms';

describe('EditModalComponent', () => {
  let component: EditModalComponent;
  let fixture: ComponentFixture < EditModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [EditModalComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
