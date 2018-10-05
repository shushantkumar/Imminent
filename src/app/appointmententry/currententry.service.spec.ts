import { TestBed, inject } from '@angular/core/testing';

import { CurrententryService } from './currententry.service';

describe('CurrententryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrententryService]
    });
  });

  it('should be created', inject([CurrententryService], (service: CurrententryService) => {
    expect(service).toBeTruthy();
  }));
});
