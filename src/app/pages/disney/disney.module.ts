import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisneyPageRoutingModule } from './disney-routing.module';

import { DisneyPage } from './disney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisneyPageRoutingModule
  ],
  declarations: [DisneyPage]
})
export class DisneyPageModule {}
