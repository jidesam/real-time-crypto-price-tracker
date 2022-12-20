import { TestBed } from '@angular/core/testing';

import { TrendingCoinsService } from './trending-coins.service';

describe('TrendingCoinsService', () => {
  let service: TrendingCoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingCoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
