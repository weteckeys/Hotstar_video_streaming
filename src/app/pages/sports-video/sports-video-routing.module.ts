import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsVideoPage } from './sports-video.page';

const routes: Routes = [
  {
    path: '',
    component: SportsVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsVideoPageRoutingModule {}
