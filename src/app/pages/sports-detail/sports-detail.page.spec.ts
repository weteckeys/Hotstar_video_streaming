import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportsDetailPage } from './sports-detail.page';

describe('SportsDetailPage', () => {
  let component: SportsDetailPage;
  let fixture: ComponentFixture<SportsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
