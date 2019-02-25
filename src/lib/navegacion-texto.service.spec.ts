import { TestBed } from '@angular/core/testing';

import { NavegacionTextoService } from './navegacion-texto.service';

describe('NavegacionTextoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavegacionTextoService = TestBed.get(NavegacionTextoService);
    expect(service).toBeTruthy();
  });
});
