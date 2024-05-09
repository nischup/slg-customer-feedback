import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackStartQuestionVerticalPage } from './feedback-start-question-vertical.page';

describe('FeedbackStartQuestionVerticalPage', () => {
  let component: FeedbackStartQuestionVerticalPage;
  let fixture: ComponentFixture<FeedbackStartQuestionVerticalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedbackStartQuestionVerticalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
