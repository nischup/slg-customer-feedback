import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackStartQuestionVerticalPageRoutingModule } from './feedback-start-question-vertical-routing.module';

import { FeedbackStartQuestionVerticalPage } from './feedback-start-question-vertical.page';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackStartQuestionVerticalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FeedbackStartQuestionVerticalPage, StarRatingComponent]
})
export class FeedbackStartQuestionVerticalPageModule {}
