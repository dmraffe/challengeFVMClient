import { TestBed } from '@angular/core/testing';

import { ComponentseventsService } from './componentsevents.service';

describe('ComponentseventsService', () => {
  let service: ComponentseventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentseventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
