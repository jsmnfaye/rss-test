import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorLettersPage } from './editor-letters';

@NgModule({
  declarations: [
    EditorLettersPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorLettersPage),
  ],
})
export class EditorLettersPageModule {}
