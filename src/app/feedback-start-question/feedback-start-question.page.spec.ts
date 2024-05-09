import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackStartQuestionPage } from './feedback-start-question.page';

describe('FeedbackStartQuestionPage', () => {
  let component: FeedbackStartQuestionPage;
  let fixture: ComponentFixture<FeedbackStartQuestionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedbackStartQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
