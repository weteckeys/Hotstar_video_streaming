import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailLoginPage } from './email-login.page';

describe('EmailLoginPage', () => {
  let component: EmailLoginPage;
  let fixture: ComponentFixture<EmailLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
