import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackStartQuestionVerticalPage } from './feedback-start-question-vertical.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackStartQuestionVerticalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackStartQuestionVerticalPageRoutingModule {}
