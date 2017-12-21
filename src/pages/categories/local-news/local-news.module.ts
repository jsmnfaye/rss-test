import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalNewsPage } from './local-news';

@NgModule({
  declarations: [
    LocalNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalNewsPage),
  ],
})
export class LocalNewsPageModule {}
