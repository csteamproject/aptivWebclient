import { TestBed, inject } from '@angular/core/testing';

import { PageinationService } from './pageination.service';

describe('PageinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageinationService]
    });
  });

  it('should be created', inject([PageinationService], (service: PageinationService) => {
    expect(service).toBeTruthy();
  }));
});
