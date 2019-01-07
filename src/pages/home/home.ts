import { Component } from '@angular/core';
import { NavController  , LoadingController , ToastController,App, ViewController} from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { ResortsPage } from '../resorts/resorts';
import { SoonPage } from '../soon/soon';
import { ReservationPage } from '../reservation/reservation';
import { FlightPage } from '../flight/flight';
import { ProfilePage } from '../profile/profile';
import { SerachPage } from '../serach/serach';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tap: number = 0;
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController , public toastCtrl :ToastController ,public viewCtrl: ViewController ,
    public appCtrl: App ) {

  }
 
  tapEvent(e) {
    this.tap++
  }
GoBack(){
  let toast = this.toastCtrl.create({
    message: 'تم تسجيل الخروج بنجاح  ',
    duration: 2000,
    position: 'top'
  });

  toast.present(toast);

  const loader = this.loadingCtrl.create({
    content: "حذف الملفات المؤقته ..",
    duration: 3000
  });
  loader.present();
  this.newMethod();
}

  private newMethod() {
    this.navCtrl.setRoot(SignInPage);
  }
  GoResorts(){
   
this.navCtrl.setRoot(ReservationPage);
      
    }
  GoSoon()
  {
    
    this.navCtrl.setRoot(SoonPage)
    
  }
  Goflight(){
    this.navCtrl.setRoot(FlightPage)

  }
  GoProfile(){
    this.navCtrl.setRoot(ProfilePage)
  }
  GoSearch(){
    this.navCtrl.setRoot(SerachPage)
  }
  GoContact(){
    this.navCtrl.setRoot(ContactPage)
  }
}
