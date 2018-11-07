import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  DeleteModalComponent
} from './delete-modal.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  HttpClientModule
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture < DeleteModalComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [FormsModule,
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [DeleteModalComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
