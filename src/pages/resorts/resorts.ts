import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ResortsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resorts',
  templateUrl: 'resorts.html',
})
export class ResortsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  GoHome() {
    this.navCtrl.setRoot(HomePage);
  
  }
}
