import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiCategoriaProvider} from "../../providers/api-categoria/api-categoria";
import { Categoria } from "../../models/models";
import {VocabularioPage} from "../vocabulario/vocabulario";
import {FrasePage} from "../frase/frase";

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  items: Array<Categoria>;
  api: any;
  tipo_categoria: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, api: ApiCategoriaProvider) {
    this.api = api;
    this.tipo_categoria = navParams.get("categoria");
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CategoriaTipoFrasesPage');
    this.api.query('categorias/'+this.tipo_categoria+'/')
      .subscribe(
        (data) => { // Success
          this.items = data;
          console.log(this.items);
          console.log("hola");
        },
        (error) =>{
          console.error(error);
        }
      );
  }


  itemTapped(event, item) {
    if(this.tipo_categoria=='palabras'){
      this.navCtrl.setRoot(VocabularioPage, {categoria_pk: item.pk});
    }else{
      this.navCtrl.setRoot(FrasePage, {categoria_pk: item.pk});
    }
  }
}
