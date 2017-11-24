import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTipoFrasesPage } from './lista-tipo-frases';

@NgModule({
  declarations: [
    ListaTipoFrasesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTipoFrasesPage),
  ],
})
export class ListaTipoFrasesPageModule {
}
