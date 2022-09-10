import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportsVideoPage } from './sports-video.page';

describe('SportsVideoPage', () => {
  let component: SportsVideoPage;
  let fixture: ComponentFixture<SportsVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
