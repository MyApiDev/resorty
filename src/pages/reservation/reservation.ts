import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  public tap: number = 0;
  images = ['1.jpg',  '4.jpg', '5.jpg', '6.jpg'];
  rating: number = 4;
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
      this.rating = starRating;
    });
 
  }
  tapEvent(e) {
    this.tap++
  }
  
 GoHome2(){
   this.navCtrl.setRoot(HomePage)
 }

}
