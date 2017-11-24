import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VocabularioPage } from './vocabulario';

@NgModule({
  declarations: [
    VocabularioPage,
  ],
  imports: [
    IonicPageModule.forChild(VocabularioPage),
  ],
})
export class VocabularioPageModule {}
