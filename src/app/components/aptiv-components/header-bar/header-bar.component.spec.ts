import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  HeaderBarComponent
} from './header-bar.component';
import {
  HttpClientModule
} from '@angular/common/http';

describe('HeaderBarComponent', () => {
  let component: HeaderBarComponent;
  let fixture: ComponentFixture < HeaderBarComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientModule
        ],
        declarations: [HeaderBarComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
