import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackUserDetailPageRoutingModule } from './feedback-user-detail-routing.module';

import { FeedbackUserDetailPage } from './feedback-user-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackUserDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FeedbackUserDetailPage]
})
export class FeedbackUserDetailPageModule {}
