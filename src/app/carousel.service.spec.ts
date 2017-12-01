import { TestBed, inject } from '@angular/core/testing';

import { CarouselService } from './carousel.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('CarouselService', () => {
  let service: CarouselService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CarouselService]
    });
    service = TestBed.get(CarouselService);
  });
  it('create an instance', (() => {
    expect(service).toBeDefined();
  }));
});
