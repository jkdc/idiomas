import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiCategoriaProvider} from "../../providers/api-categoria/api-categoria";
import {PalabraModel} from "../../models/models";
import {DatabaseProvider} from "../../providers/database/database";
import {SQLite} from "@ionic-native/sqlite";

/**
 * Generated class for the VocabularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocabulario',
  templateUrl: 'vocabulario.html',
})
export class VocabularioPage {
  items: Array<PalabraModel>;
  api: any;
  pk_tipo_categoria: any;
  tipo_categoria: any;
  favoritos: any;
  dificiles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, api: ApiCategoriaProvider, public sqlite: SQLite, public database: DatabaseProvider)
  {
    this.api = api;
    this.pk_tipo_categoria = navParams.get("categoria_pk");
    this.tipo_categoria = "Vocabulario";
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTipoFrasesPage');

    this.api.query('palabras/'+this.pk_tipo_categoria+'/')
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

  getData(){
    this.database.get('favoritos')
      .then((data) =>{
        console.log("favoritos"+data);
        this.favoritos=data;
      })
      .catch(error =>{
        console.error(error);
      });
    this.database.get('favoritos')
      .then((data) =>{
        console.log("dificil"+data);
        this.dificiles=data;
      })
      .catch(error =>{
        console.error(error);
      });
  }
}
