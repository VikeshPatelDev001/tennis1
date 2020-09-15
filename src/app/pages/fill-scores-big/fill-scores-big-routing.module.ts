import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillScoresBigPage } from './fill-scores-big.page';

const routes: Routes = [
  {
    path: '',
    component: FillScoresBigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillScoresBigPageRoutingModule {}
