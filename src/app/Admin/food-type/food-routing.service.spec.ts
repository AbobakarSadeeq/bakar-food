import { TestBed } from '@angular/core/testing';

import { FoodRoutingService } from './food-routing.service';

describe('FoodRoutingService', () => {
  let service: FoodRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
