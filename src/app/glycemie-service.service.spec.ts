import { TestBed } from '@angular/core/testing';

import { GlycemieService } from './glycemie-service.service';

describe('GlycemieServiceService', () => {
  let service: GlycemieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlycemieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
