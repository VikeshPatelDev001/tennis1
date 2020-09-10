import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoLinesPage } from './demo-lines.page';

describe('DemoLinesPage', () => {
  let component: DemoLinesPage;
  let fixture: ComponentFixture<DemoLinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoLinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
