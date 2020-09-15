import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoLinesNewPageRoutingModule } from './demo-lines-new-routing.module';

import { DemoLinesNewPage } from './demo-lines-new.page';

import { FillScoresPage } from '../fill-scores/fill-scores.page';
import { FillScoresBigPage } from '../fill-scores-big/fill-scores-big.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoLinesNewPageRoutingModule
  ],
  declarations: [DemoLinesNewPage, FillScoresPage, FillScoresBigPage]
})
export class DemoLinesNewPageModule {}
