import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackStartQuestionPageRoutingModule } from './feedback-start-question-routing.module';

import { FeedbackStartQuestionPage } from './feedback-start-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackStartQuestionPageRoutingModule
  ],
  declarations: [FeedbackStartQuestionPage]
})
export class FeedbackStartQuestionPageModule {}
