import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoLinesPage } from './demo-lines.page';

const routes: Routes = [
  {
    path: '',
    component: DemoLinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoLinesPageRoutingModule {}
