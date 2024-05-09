import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackUserDetailPage } from './feedback-user-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackUserDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackUserDetailPageRoutingModule {}
