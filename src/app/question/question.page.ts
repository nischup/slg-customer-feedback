import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  questionList: any;
  isLoading = false; // Control whether to show the loading spinner
  loaderType = 'circular'; // Set the type of spinner (e.g., 'lines', 'circular', etc.)

  constructor(private router: Router,
      private http: HttpClient,  
      private userService: UserService,
      private loadingController: LoadingController) { 

      this.getQuestion();

  }

    ngOnInit() {}

    getQuestion(){
        this.userService.feedBackQuestion().subscribe(res => {
          this.questionList = res;
          console.log(this.questionList);
      }, err => {
                if (err) {
                         console.log('no data found');
                }
            });
    } 

    async fetchData() {
      this.isLoading = true; // Show the loading spinner
      try {
        // Simulate fetching data (replace with your actual data fetching logic)
        await this.getData();
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false; // Hide the loading spinner
      }
    }

    async getData() {
      // Simulate data fetching (replace with your actual data fetching logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
        this.getQuestion();
    }

}
