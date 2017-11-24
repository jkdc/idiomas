import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrasePage } from './frase';

@NgModule({
  declarations: [
    FrasePage,
  ],
  imports: [
    IonicPageModule.forChild(FrasePage),
  ],
})
export class FrasePageModule {}
