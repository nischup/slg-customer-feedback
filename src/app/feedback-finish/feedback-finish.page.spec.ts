import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFinishPage } from './feedback-finish.page';

describe('FeedbackFinishPage', () => {
  let component: FeedbackFinishPage;
  let fixture: ComponentFixture<FeedbackFinishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedbackFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
