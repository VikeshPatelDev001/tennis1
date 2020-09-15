import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoLinesNewPage } from './demo-lines-new.page';

describe('DemoLinesNewPage', () => {
  let component: DemoLinesNewPage;
  let fixture: ComponentFixture<DemoLinesNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLinesNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoLinesNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
