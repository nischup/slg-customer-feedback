import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

 constructor(private router: Router) {}

  ngOnInit() {
  }

  feedbackQuestion(){
    this.router.navigate(['/feedback-start-question-vertical']);
  }

}
