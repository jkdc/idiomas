import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiCategoriaProvider} from "../../providers/api-categoria/api-categoria";
import {FraseModel} from "../../models/models";

/**
 * Generated class for the FrasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frase',
  templateUrl: 'frase.html',
})
export class FrasePage {
  items: Array<FraseModel>;
  api: any;
  pk_tipo_categoria: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, api: ApiCategoriaProvider) {
    this.api = api;
    this.pk_tipo_categoria = navParams.get("categoria");


    this.api.query('frases/'+this.pk_tipo_categoria+'/')
      .subscribe(
        (data) => { // Success
          this.items = data;
          //console.log(this.items);
        },
        (error) =>{
          console.error(error);
        }
      );
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
