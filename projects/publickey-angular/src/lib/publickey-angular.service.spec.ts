import { TestBed } from '@angular/core/testing';

import { PublickeyAngularService } from './publickey-angular.service';

describe('PublickeyAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublickeyAngularService = TestBed.get(PublickeyAngularService);
    expect(service).toBeTruthy();
  });
});
