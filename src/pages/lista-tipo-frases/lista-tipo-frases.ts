import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FraseModel} from "../../models/models";
import {ApiCategoriaProvider} from "../../providers/api-categoria/api-categoria";

/**
 * Generated class for the ListaTipoFrasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-tipo-frases',
  templateUrl: 'lista-tipo-frases.html',
})
export class ListaTipoFrasesPage {
  fraseModel: FraseModel;
  items: any;
  api: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, api: ApiCategoriaProvider) {
    this.api = api;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTipoFrasesPage');
    this.api.query('frase')
      .subscribe(
        (data) => { // Success
          this.items = data['results'];
          console.log(this.items);
        },
        (error) =>{
          console.error(error);
        }
      );
  }

}
