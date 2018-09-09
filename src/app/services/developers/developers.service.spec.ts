import { TestBed, inject } from '@angular/core/testing';

import { DevelopersService } from './developers.service';

describe('DevelopersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevelopersService]
    });
  });

  it('Should be created', inject([DevelopersService], (service: DevelopersService) => {
    expect(service).toBeTruthy();
  }));
});
