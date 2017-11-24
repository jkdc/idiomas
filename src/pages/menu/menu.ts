import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {HomePage} from "../home/home";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @Input() pagina;
  public rootPage: any;

  constructor(private navCtrl: NavController) {
    this.rootPage = HomePage;
  }

}
