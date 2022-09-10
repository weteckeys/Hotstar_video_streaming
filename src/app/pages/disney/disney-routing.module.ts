import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisneyPage } from './disney.page';

const routes: Routes = [
  {
    path: '',
    component: DisneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisneyPageRoutingModule {}
