import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillScoresPage } from './fill-scores.page';

const routes: Routes = [
  {
    path: '',
    component: FillScoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillScoresPageRoutingModule {}
