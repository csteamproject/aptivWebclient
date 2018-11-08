import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  EditItemModalComponent
} from './edit-item-modal.component';
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
  let component: EditItemModalComponent;
  let fixture: ComponentFixture < EditItemModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [EditItemModalComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
