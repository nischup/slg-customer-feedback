import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})

export class StarRatingComponent {
  @Input() maxRating: number = 5; // Maximum rating (number of stars)
  @Input() rating: number = 0; // Current rating
  @Output() ratingChange = new EventEmitter<number>();
  ratedStars: number = 0; // Initialize ratedStars to 0

  stars: number[] = [];

  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0);
  }

  // rate(rating: number) {
  //   this.rating = rating;
  //   this.ratingChange.emit(this.rating);
  // }

  rate(rating: number) {
    if (this.ratedStars === rating - 0.5) {
      // If the user clicks a half-star again, clear the rating (0.5 stars)
      this.ratedStars = 0;
      this.rating = 0;
    } else {
      this.ratedStars = rating; // Update the ratedStars property
      this.rating = rating;
    }
    
    this.ratingChange.emit(this.rating);
  }

}