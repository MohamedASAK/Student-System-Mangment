import { TestBed } from '@angular/core/testing';

import { APIfunctionsService } from './apifunctions.service';

describe('APIfunctionsService', () => {
  let service: APIfunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIfunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
