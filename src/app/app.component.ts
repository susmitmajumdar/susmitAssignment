import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { carouselConfig } from './carousel.config';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarouselService, HttpClient],
})
export class AppComponent implements OnInit {
  imageData;
  slideIndex = 0;
  constructor(private dataService: CarouselService) {}
  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {
      this.imageData = data;
      this.showSlides(this.slideIndex);
      if (carouselConfig.autoCarousel) {
        setInterval(() => {
          this.slideIndex++;
          this.showSlides(this.slideIndex);
        }, carouselConfig.carouselSetTime);
      }
    });
   }
  showSlides(n) {
    if (n > this.imageData.length - 1 ) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex =  this.imageData.length - 1;
    }
  }
  nextSlide() {
    this.slideIndex++;
    this.showSlides(this.slideIndex);
  }
  prevSlide() {
    this.slideIndex--;
    this.showSlides(this.slideIndex);
  }
  currentSlide(index) {
    this.slideIndex = index;
    this.showSlides(this.slideIndex);
  }
}
