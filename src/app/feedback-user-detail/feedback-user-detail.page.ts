import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../api/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-feedback-user-detail',
  templateUrl: './feedback-user-detail.page.html',
  styleUrls: ['./feedback-user-detail.page.scss'],
})
export class FeedbackUserDetailPage implements OnInit {

 customerForm!: FormGroup;
 formData: any; // Declare formData as a class-level variable

  constructor(private route: ActivatedRoute, private router: Router,
      private http: HttpClient,
      private formBuilder: FormBuilder,
      private userService: UserService) { 

      this.customerForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required]],
          mobile: [''],
        });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['data']) {
         this.formData = JSON.parse(params['data']); // Remove 'const' to assign to the class-level variable
         console.log(this.formData);
      }
    });
  }

  sendFeedBack(){

    const customerFormData= this.customerForm.value;
    const questionAnsData= this.formData;

    const feedbackData = {
      customerData: customerFormData,
      questionAnsData: questionAnsData
    };
    
    console.log(feedbackData);
    // console.log(customerFormData);
    // console.log(questionAnsData);

      this.userService.giveFeedback(feedbackData).subscribe((result: any) => {
      if ('status' in result) {
            const status = result['status'] as string; 
            if (status === "success") {

              this.router.navigate(['feedback-finish']);
              // this.odForm.reset();
              // this.odForm.reset({
              //     ...this.unchangedFields,
              //   });
              // this.toast('Your OD Application submitted for approval !!! Thank You', 5000);
            }else{
              // this.toast('Sorry !!! something went worng', 5000);
              
            }


        } else {
            // this.toast('Please enter valid login data!', 5000);
        }
    });

  }

}
