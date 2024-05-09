import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-start-question',
  templateUrl: './feedback-start-question.page.html',
  styleUrls: ['./feedback-start-question.page.scss'],
})
export class FeedbackStartQuestionPage implements OnInit {
  typingComplete = false;
  questionList: any; // Use 'any[]' to allow flexibility
  currentIndex: number = 0;
  showQuestion: boolean = false; // Set initially to false

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getQuestion();
  }

  stopAnimation() {
    this.typingComplete = true;
  }

  getQuestion() {
    this.userService.feedBackQuestion().subscribe(
      (res) => {
        this.questionList = res;
        this.showQuestion = true;
      },
      (err) => {
        if (err) {
          console.log('no data found');
        }
      }
    );
  }

  getCurrentQuestion() {
    return this.questionList[this.currentIndex];
  }

  nextQuestion() {
    if (this.currentIndex < this.questionList.length - 1) {
      this.currentIndex++;
    } else {
     
    }
  }
}
