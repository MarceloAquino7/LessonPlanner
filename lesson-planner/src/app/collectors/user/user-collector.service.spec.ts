import { TestBed } from '@angular/core/testing';

import { UserCollectorService } from './user-collector.service';

describe('UserCollectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCollectorService = TestBed.get(UserCollectorService);
    expect(service).toBeTruthy();
  });
});
