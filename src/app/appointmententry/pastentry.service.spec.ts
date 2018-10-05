import { TestBed, inject } from '@angular/core/testing';

import { PastentryService } from './pastentry.service';

describe('PastentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastentryService]
    });
  });

  it('should be created', inject([PastentryService], (service: PastentryService) => {
    expect(service).toBeTruthy();
  }));
});
