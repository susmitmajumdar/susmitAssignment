import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CarouselService } from './carousel.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent
      ],
      providers: [CarouselService]
    }).compileComponents();
  }));
  it('slideIndex should be defined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.slideIndex).toBeDefined();
  }));
  it('slideIndex should assign a value to zero', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.slideIndex).toEqual(0);
  }));
  it('check showSlides function is defined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.showSlides).toBeDefined();
  }));
  it('ImageData length should be greater than zero', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const data = ImageData;
    expect(data.length).toBeGreaterThan(0);
  }));
  it('check nextSlide function is defined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.nextSlide).toBeDefined();
  }));
  it('check prevSlide function is defined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.prevSlide).toBeDefined();
  }));
});
