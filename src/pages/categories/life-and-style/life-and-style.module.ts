import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeAndStylePage } from './life-and-style';

@NgModule({
  declarations: [
    LifeAndStylePage,
  ],
  imports: [
    IonicPageModule.forChild(LifeAndStylePage),
  ],
})
export class LifeAndStylePageModule {}
