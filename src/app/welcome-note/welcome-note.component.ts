import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-note',
  templateUrl: './welcome-note.component.html',
  styleUrls: ['./welcome-note.component.scss'],
})
export class WelcomeNoteComponent implements AfterViewInit {
  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    // Wait for the view to be initialized, and the element to be in the DOM
    const welcomeCard = document.querySelector('.welcome-note-card');

    if (welcomeCard) {
      // Create and play an animation
      const welcomeAnimation = this.animationCtrl.create()
        .addElement(welcomeCard)
        .duration(1000)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(-50px)', 'translateY(0px)');

      welcomeAnimation.play();
    }
  }
}
