import { TestBed, inject } from '@angular/core/testing';

import { UtaService } from './uta.service';

describe('UtaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtaService]
    });
  });

  it('should be created', inject([UtaService], (service: UtaService) => {
    expect(service).toBeTruthy();
  }));
});
