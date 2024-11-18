import { TestBed } from '@angular/core/testing';

import { InMemomryDataService } from './in-memomry-data.service';

describe('InMemomryDataService', () => {
  let service: InMemomryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemomryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
