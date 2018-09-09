import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptivInputBoxComponent } from './aptiv-input-box.component';

describe('AptivInputBoxComponent', () => {
  let component: AptivInputBoxComponent;
  let fixture: ComponentFixture<AptivInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptivInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptivInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
