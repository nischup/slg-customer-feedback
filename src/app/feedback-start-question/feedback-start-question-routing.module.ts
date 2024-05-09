import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackStartQuestionPage } from './feedback-start-question.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackStartQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackStartQuestionPageRoutingModule {}
