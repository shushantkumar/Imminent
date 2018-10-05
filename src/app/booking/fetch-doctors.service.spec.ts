import { TestBed, inject } from '@angular/core/testing';

import { FetchDoctorsService } from './fetch-doctors.service';

describe('FetchDoctorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDoctorsService]
    });
  });

  it('should be created', inject([FetchDoctorsService], (service: FetchDoctorsService) => {
    expect(service).toBeTruthy();
  }));
});
