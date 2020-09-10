import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FillScoresPage } from './fill-scores.page';

describe('FillScoresPage', () => {
  let component: FillScoresPage;
  let fixture: ComponentFixture<FillScoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillScoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FillScoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
