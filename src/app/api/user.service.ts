import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {config} from '../config';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    private token: any;
    private data: any;

    constructor(public http: HttpClient,private router: Router) {
        if (localStorage.getItem('user')) {
            } else {
                // this.router.navigateByUrl('/login');
            }
        }

     login(data: any) {
        return this.http.post(config.API_URL + 'login.php', data);
     } 

      public feedBackQuestion() {
        return this.http.get(config.API_URL + 'feedback-question.php');
      }       

      public giveFeedback(data: any) {
        return this.http.post(config.API_URL + 'feedback-question-answer.php', data);
      }    


}
