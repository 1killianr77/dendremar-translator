import { TestBed } from '@angular/core/testing';

import { WordOrderService } from './word-order.service';

describe('WordOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordOrderService = TestBed.get(WordOrderService);
    expect(service).toBeTruthy();
  });
});
