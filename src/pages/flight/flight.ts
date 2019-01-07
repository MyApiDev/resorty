import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-flight',
  templateUrl: 'flight.html',
})
export class FlightPage {
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }
GoBack(){
  this.navCtrl.setRoot(HomePage);
}


}
