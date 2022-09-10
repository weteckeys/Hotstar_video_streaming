import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisneyPage } from './disney.page';

describe('DisneyPage', () => {
  let component: DisneyPage;
  let fixture: ComponentFixture<DisneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
