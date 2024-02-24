import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotpwPage } from './forgotpw.page';

describe('ForgotpwPage', () => {
  let component: ForgotpwPage;
  let fixture: ComponentFixture<ForgotpwPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotpwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
