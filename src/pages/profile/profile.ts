import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pet: string = "puppies";
  isAndroid: boolean = false;


   
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,platform: Platform) {
    this.isAndroid = platform.is('android');
  }
GoHome(){
  this.navCtrl.setRoot(HomePage)
}
}
