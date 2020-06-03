import { TestBed } from '@angular/core/testing';

import { IpoServiceService } from './ipo-service.service';

describe('IpoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpoServiceService = TestBed.get(IpoServiceService);
    expect(service).toBeTruthy();
  });
});
