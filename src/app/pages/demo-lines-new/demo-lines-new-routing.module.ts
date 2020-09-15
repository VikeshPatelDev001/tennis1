import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoLinesNewPage } from './demo-lines-new.page';

const routes: Routes = [
  {
    path: '',
    component: DemoLinesNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoLinesNewPageRoutingModule {}
