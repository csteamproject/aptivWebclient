import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  NavBarComponent
} from './nav-bar.component';
import {
  HttpClientModule
} from '@angular/common/http';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture < NavBarComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule],
        declarations: [NavBarComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
