import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsDetailPageRoutingModule } from './sports-detail-routing.module';

import { SportsDetailPage } from './sports-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsDetailPageRoutingModule
  ],
  declarations: [SportsDetailPage]
})
export class SportsDetailPageModule {}
