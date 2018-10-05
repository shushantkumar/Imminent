import { TestBed, inject } from '@angular/core/testing';

import { DocloginService } from './doclogin.service';

describe('DocloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocloginService]
    });
  });

  it('should be created', inject([DocloginService], (service: DocloginService) => {
    expect(service).toBeTruthy();
  }));
});
