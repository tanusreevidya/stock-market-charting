import { TestBed } from '@angular/core/testing';

import { ComparecompanyserviceService } from './comparecompanyservice.service';

describe('ComparecompanyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComparecompanyserviceService = TestBed.get(ComparecompanyserviceService);
    expect(service).toBeTruthy();
  });
});
