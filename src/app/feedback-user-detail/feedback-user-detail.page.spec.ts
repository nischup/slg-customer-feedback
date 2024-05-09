import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackUserDetailPage } from './feedback-user-detail.page';

describe('FeedbackUserDetailPage', () => {
  let component: FeedbackUserDetailPage;
  let fixture: ComponentFixture<FeedbackUserDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeedbackUserDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
