import { TestBed } from '@angular/core/testing';

import { WordSearchService } from './word-search.service';

describe('WordSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordSearchService = TestBed.get(WordSearchService);
    expect(service).toBeTruthy();
  });
});
