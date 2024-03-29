import { TestBed, inject } from '@angular/core/testing';

import { DevelopersService } from './developers.service';
import { HttpClientModule } from '@angular/common/http';

describe('DevelopersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevelopersService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('Should be created', inject([DevelopersService], (service: DevelopersService) => {
    expect(service).toBeTruthy();
  }));
});
