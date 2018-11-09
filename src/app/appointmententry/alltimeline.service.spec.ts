import { TestBed, inject } from '@angular/core/testing';

import { AlltimelineService } from './alltimeline.service';

describe('AlltimelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlltimelineService]
    });
  });

  it('should be created', inject([AlltimelineService], (service: AlltimelineService) => {
    expect(service).toBeTruthy();
  }));
});
