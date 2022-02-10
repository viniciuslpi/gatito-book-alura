import { TestBed } from '@angular/core/testing';

import { AutenticacaooGuard } from './autenticacaoo.guard';

describe('AutenticacaooGuard', () => {
  let guard: AutenticacaooGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticacaooGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
