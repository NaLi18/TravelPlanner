import { TestBed } from '@angular/core/testing';

import { TravelPlannerService } from './travel-planner.service';

describe('TravelPlannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelPlannerService = TestBed.get(TravelPlannerService);
    expect(service).toBeTruthy();
  });
});
