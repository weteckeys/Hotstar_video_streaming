import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsVideoPageRoutingModule } from './sports-video-routing.module';

import { SportsVideoPage } from './sports-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsVideoPageRoutingModule
  ],
  declarations: [SportsVideoPage]
})
export class SportsVideoPageModule {}
