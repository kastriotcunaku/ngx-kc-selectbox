import { TestBed } from '@angular/core/testing';

import { NgxSelectboxService } from './ngx-selectbox.service';

describe('NgxSelectboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSelectboxService = TestBed.get(NgxSelectboxService);
    expect(service).toBeTruthy();
  });
});
