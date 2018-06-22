import { TestBed, inject } from '@angular/core/testing';

import { DetailsListService } from './details-list.service';

describe('DetailsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsListService]
    });
  });

  it('should be created', inject([DetailsListService], (service: DetailsListService) => {
    expect(service).toBeTruthy();
  }));
});
