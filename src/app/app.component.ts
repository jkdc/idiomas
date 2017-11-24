import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AlertController, Nav, Platform, ToastController} from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home";
import {CategoriaPage} from "../pages/categoria/categoria";
import {SQLite} from "@ionic-native/sqlite";
import {DatabaseProvider} from "../providers/database/database";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Vocabulario', component: CategoriaPage, categoria: 'palabras' },
    { title: 'Frases', component: CategoriaPage, categoria: 'frases'  },
    { title: 'Diccionario', component: "DicccionarioPage" },

  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl: AlertController,public sqlite: SQLite, public database: DatabaseProvider, public toastCtrl:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
      this.createDatabase();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {categoria: page.categoria});
  }

  myHandlerFunction(){
    let toast = this.toastCtrl.create({
      message: "Press Again to Confirm Exit",
      duration: 3000
    });
    toast.present();
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
      .then((db) => {
        this.database.setDatabase(db);
        this.database.createTable();
        let favorito = {name: 'favoritos', data: ''};
        let dificil = {name: 'dificil', data: ''};
        this.database.create(favorito);
        this.database.create(dificil);

      })
      .then(() =>{
        console.log("Database create");
      })
      .catch(error =>{
        console.error(error);
      });
  }
}

