import { TestBed } from '@angular/core/testing';

import { GetlisteService } from './getliste.service';

describe('GetlisteService', () => {
  let service: GetlisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
