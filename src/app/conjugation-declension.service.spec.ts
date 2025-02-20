import { TestBed } from '@angular/core/testing';

import { ConjugationDeclensionService } from './conjugation-declension.service';

describe('ConjugationDeclensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConjugationDeclensionService = TestBed.get(ConjugationDeclensionService);
    expect(service).toBeTruthy();
  });
});
