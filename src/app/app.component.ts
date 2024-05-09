import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Questions', url: '/question', icon: 'help' },
    { title: 'Take Feedback', url: '/feedback', icon: 'paper-plane' },
    { title: 'Contact us', url: '/contact', icon: 'mail' },
    { title: 'Share', url: '/share', icon: 'share' },
  ];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {

  }
  
}
