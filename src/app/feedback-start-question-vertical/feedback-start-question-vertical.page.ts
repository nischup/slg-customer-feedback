import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback-start-question-vertical',
  templateUrl: './feedback-start-question-vertical.page.html',
  styleUrls: ['./feedback-start-question-vertical.page.scss'],
})
export class FeedbackStartQuestionVerticalPage implements OnInit {

  typingComplete = false;
  isLoading = false;
  questionList: any; 
  questionForm!: FormGroup;
  userRating: number = 0; 


    constructor(
      private router: Router,
      private http: HttpClient,
      private formBuilder: FormBuilder,
      private userService: UserService
    ) {
      this.getQuestion();
        this.questionForm = this.formBuilder.group({
          questions: this.formBuilder.array([]), // Initialize as an empty array
          question_type: this.formBuilder.array([]), // Initialize as an empty array
          question_ans: this.formBuilder.array([]), // Initialize as an empty array
          userRating: [''],
        });
    }

    ngOnInit() {
      this.initializeForm(); // Initialize the form controls
      this.getQuestion();
    }

    stopAnimation() {
      this.typingComplete = true;
    }

    onRatingChanged(rating: number, index: number) {
      this.userRating = rating;
      // Update the input field value with the new userRating
      this.questionForm.get('question_ans_' + index)?.setValue(this.userRating);
    }

    getQuestion() {
      this.userService.feedBackQuestion().subscribe(
        (res) => {
          this.questionList = res;
          this.initializeForm();
        },
        (err) => {
          if (err) {
            console.log('no data found');
          }
        }
      );
    }

    loadQuestions() {
      this.isLoading = true; 
      setTimeout(() => {
        this.getQuestion();
        this.isLoading = false; 
      }, 3000);
    }

    initializeForm() {
      this.questionForm = this.formBuilder.group({});
      if (this.questionList && this.questionList.length) {
        for (let i = 0; i < this.questionList.length; i++) {
          this.questionForm.addControl('question' + i, new FormControl(this.questionList[i].question))
          this.questionForm.addControl('question_type' + i, new FormControl(this.questionList[i].question_type))
          this.questionForm.addControl('question_ans_' + i, new FormControl(''));
        }
      } else {
        console.log('There is a issues on questionlist');
      }
    }

    sendNewApplication() {
      const formData = this.questionForm.value;
      this.router.navigate(['/feedback-user-detail'], { queryParams: { data: JSON.stringify(formData) } });
      // console.log(formData);
    }


}
