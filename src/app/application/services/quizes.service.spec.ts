import { TestBed, inject } from '@angular/core/testing';

import { QuizesService } from './quizes.service';

describe('QuizesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizesService]
    });
  });

  it('should be created', inject([QuizesService], (service: QuizesService) => {
    expect(service).toBeTruthy();
  }));
});
