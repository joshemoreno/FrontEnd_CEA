import { TestBed } from '@angular/core/testing';

import { OrganizadorGuard } from './organizador.guard';

describe('OrganizadorGuard', () => {
  let guard: OrganizadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrganizadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
