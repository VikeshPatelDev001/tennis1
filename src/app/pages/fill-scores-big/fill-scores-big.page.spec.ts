import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FillScoresBigPage } from './fill-scores-big.page';

describe('FillScoresBigPage', () => {
  let component: FillScoresBigPage;
  let fixture: ComponentFixture<FillScoresBigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillScoresBigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FillScoresBigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
