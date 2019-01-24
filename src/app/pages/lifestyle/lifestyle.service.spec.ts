import { TestBed } from '@angular/core/testing';

import { LifestyleService } from './lifestyle.service';

describe('LifestyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifestyleService = TestBed.get(LifestyleService);
    expect(service).toBeTruthy();
  });
});
