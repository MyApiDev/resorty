import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController,LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams ,public toastCtrl: ToastController) {
  }

  GoLogin(){
    this.navCtrl.setRoot(LoginPage)
  }
  GoHome(){
    const loader = this.loadingCtrl.create({
      content: "انشاء ملفات الارتباط ..",
      duration: 1000
    });
    loader.present();
    let toast = this.toastCtrl.create({
      message: 'مرحبا بك مرة اخرى  ',
      duration: 2000,
      position: 'top'
    });

    toast.present(toast);
  
    this.newMethod();
  }


  private newMethod() {
    this.navCtrl.setRoot(HomePage);
  }
}
