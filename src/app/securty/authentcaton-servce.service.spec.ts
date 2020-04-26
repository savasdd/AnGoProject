import { TestBed } from '@angular/core/testing';

import { AuthentcatonServceService } from './authentcaton-servce.service';

describe('AuthentcatonServceService', () => {
  let service: AuthentcatonServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentcatonServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
