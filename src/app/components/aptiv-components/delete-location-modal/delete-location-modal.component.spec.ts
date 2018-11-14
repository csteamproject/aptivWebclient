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
import { FormsModule } from '@angular/forms';

describe('DeleteLocationModalComponent', () => {
  let component: DeleteLocationModalComponent;
  let fixture: ComponentFixture < DeleteLocationModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [DeleteLocationModalComponent]
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
