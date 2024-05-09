import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feedback-finish',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'feedback-start-question',
    loadChildren: () => import('./feedback-start-question/feedback-start-question.module').then( m => m.FeedbackStartQuestionPageModule)
  },
  {
    path: 'feedback-start-question-vertical',
    loadChildren: () => import('./feedback-start-question-vertical/feedback-start-question-vertical.module').then( m => m.FeedbackStartQuestionVerticalPageModule)
  },
  {
    path: 'feedback-user-detail',
    loadChildren: () => import('./feedback-user-detail/feedback-user-detail.module').then( m => m.FeedbackUserDetailPageModule)
  },
  {
    path: 'feedback-finish',
    loadChildren: () => import('./feedback-finish/feedback-finish.module').then( m => m.FeedbackFinishPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
