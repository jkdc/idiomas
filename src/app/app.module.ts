import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListaTipoFrasesPage } from '../pages/lista-tipo-frases/lista-tipo-frases';

import { ApiFraseProvider } from '../providers/api-frase/api-frase';
import { ApiVocabularioProvider } from '../providers/api-vocabulario/api-vocabulario';
import { ApiCategoriaProvider } from '../providers/api-categoria/api-categoria';
import { ApiProvider } from '../providers/api/api';
import {HttpClientModule} from "@angular/common/http";
import {CategoriaPage} from "../pages/categoria/categoria";
import {FrasePage} from "../pages/frase/frase";
import {VocabularioPage} from "../pages/vocabulario/vocabulario";
import {MenuPage} from "../pages/menu/menu";
import {PhrasalPage} from "../pages/phrasal/phrasal";
import {TeoriaPage} from "../pages/teoria/teoria";
import {TeoriaDetallePage} from "../pages/teoria-detalle/teoria-detalle";
import {SQLite} from "@ionic-native/sqlite";
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaTipoFrasesPage,
    TabsPage,
    CategoriaPage,
    FrasePage,
    VocabularioPage,
    MenuPage,
    PhrasalPage,
    TeoriaPage,
    TeoriaDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaTipoFrasesPage,
    TabsPage,
    CategoriaPage,
    FrasePage,
    VocabularioPage,
    MenuPage,
    PhrasalPage,
    TeoriaPage,
    TeoriaDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiFraseProvider,
    ApiVocabularioProvider,
    ApiCategoriaProvider,
    ApiProvider,
    SQLite,
    TasksServiceProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
