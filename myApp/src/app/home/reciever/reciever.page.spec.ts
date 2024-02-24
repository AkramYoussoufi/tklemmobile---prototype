import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecieverPage } from './reciever.page';

describe('RecieverPage', () => {
  let component: RecieverPage;
  let fixture: ComponentFixture<RecieverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecieverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
