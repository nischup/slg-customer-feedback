import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackFinishPageRoutingModule } from './feedback-finish-routing.module';

import { FeedbackFinishPage } from './feedback-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackFinishPageRoutingModule
  ],
  declarations: [FeedbackFinishPage]
})
export class FeedbackFinishPageModule {}
