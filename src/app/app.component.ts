import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { App } from '@capacitor/app';

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

 constructor(private platform: Platform, private alertController: AlertController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Listen for the hardware back button on Android
      App.addListener('backButton', ({ canGoBack }) => {
        if (!canGoBack) {
          // Show the alert to confirm exit
          this.showExitConfirm();
        } else {
          // Navigate back if possible
          window.history.back();
        }
      });
    });
  }

  // Method to show an exit confirmation alert
  async showExitConfirm() {
    const alert = await this.alertController.create({
      header: 'Exit App',
      message: 'Do you really want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // Do nothing, just dismiss the alert
          },
        },
        {
          text: 'Exit',
          handler: () => {
            // Exit the app
            App.exitApp();
          },
        },
      ],
    });

    await alert.present();
  }
  
}
