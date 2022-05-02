import { TestBed } from '@angular/core/testing';

import { KrugerService } from './kruger.service';

describe('KrugerService', () => {
  let service: KrugerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KrugerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
