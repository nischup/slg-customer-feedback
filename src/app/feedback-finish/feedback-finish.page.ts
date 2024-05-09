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
    // Use setTimeout to delay the redirection for 20 seconds (20000 milliseconds)
    setTimeout(() => {
      // Replace 'target-page' with the path of the page you want to navigate to
      this.router.navigate(['/home']);
    }, 10000);
  }

}
