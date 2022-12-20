import { TestBed } from '@angular/core/testing';

import { ApiproductcommunicationService } from './apiproductcommunication.service';

describe('ApiproductcommunicationService', () => {
  let service: ApiproductcommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiproductcommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
