import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RsspagePage } from './rsspage';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RsspagePage,
  ],
  imports: [
    IonicPageModule.forChild(RsspagePage),
    PipesModule
  ],
})
export class RsspagePageModule {}
