import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoLinesPageRoutingModule } from './demo-lines-routing.module';

import { DemoLinesPage } from './demo-lines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoLinesPageRoutingModule
  ],
  declarations: [DemoLinesPage]
})
export class DemoLinesPageModule {}
