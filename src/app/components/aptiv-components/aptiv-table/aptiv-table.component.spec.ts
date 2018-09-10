import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptivTableComponent } from './aptiv-table.component';

describe('AptivTableComponent', () => {
  let component: AptivTableComponent;
  let fixture: ComponentFixture<AptivTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptivTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptivTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Write a testcase to check and make sure all data is being passed in properly to the aptiv-table component

});
