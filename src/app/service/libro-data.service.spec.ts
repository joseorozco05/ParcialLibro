import { TestBed } from '@angular/core/testing';

import { LibroDataService } from './libro-data.service';

describe('LibroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibroDataService = TestBed.get(LibroDataService);
    expect(service).toBeTruthy();
  });
});
