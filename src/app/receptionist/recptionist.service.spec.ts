import { TestBed, inject } from '@angular/core/testing';

import { RecptionistService } from './recptionist.service';

describe('RecptionistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecptionistService]
    });
  });

  it('should be created', inject([RecptionistService], (service: RecptionistService) => {
    expect(service).toBeTruthy();
  }));
});
