import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-finish',
  templateUrl: './feedback-finish.page.html',
  styleUrls: ['./feedback-finish.page.scss'],
})
export class FeedbackFinishPage implements OnInit {

  constructor(private router: Router) {
    this.redirectToAnotherPage();
  }



   ngOnInit() {
    this.redirectToAnotherPage();
  }

    redirectToAnotherPage() {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 15000);
  }

}
