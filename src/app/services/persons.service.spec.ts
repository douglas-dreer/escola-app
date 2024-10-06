import { TestBed } from '@angular/core/testing';

import { PersonsService } from './persons.service';

describe('EscolaonlineService', () => {
  let service: PersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
