import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackFinishPage } from './feedback-finish.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackFinishPageRoutingModule {}
