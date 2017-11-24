import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListaTipoFrasesPage } from '../lista-tipo-frases/lista-tipo-frases';
import {CategoriaPage} from "../categoria/categoria";
import {VocabularioPage} from "../vocabulario/vocabulario";
import {FrasePage} from "../frase/frase";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CategoriaPage;
  tab2Root: any = VocabularioPage;//ListaTipoFrasesPage;
  tab3Root: any = FrasePage;//ListaTipoFrasesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
