import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampusLifePage } from './campus-life';

@NgModule({
  declarations: [
    CampusLifePage,
  ],
  imports: [
    IonicPageModule.forChild(CampusLifePage),
  ],
})
export class CampusLifePageModule {}
