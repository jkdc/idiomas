import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {VocabularioPage} from "../vocabulario/vocabulario";
import {CategoriaPage} from "../categoria/categoria";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listPage: any;
  selectedPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedPage = navParams.get('page');
    this.listPage = [
      {page: CategoriaPage,title:"VOCABULARIO",categoria:"palabras"},
      {page: CategoriaPage,title:"FRASES",categoria:"frases"},
    ];
  }
  itemTapped(event, item) {
    this.navCtrl.setRoot(item.page, {categoria: item.categoria});
  }
}
