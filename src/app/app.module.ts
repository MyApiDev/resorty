import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ReservationPage} from '../pages/reservation/reservation';
import {ResortsPage} from '../pages/resorts/resorts';
import { SoonPage } from '../pages/soon/soon';
import { FlightPage } from '../pages/flight/flight';
import { ProfilePage } from '../pages/profile/profile';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicPageModule } from 'ionic-angular';
import { StarRatingModule } from 'ionic3-star-rating';
import { SerachPage } from '../pages/serach/serach';
import { ContactPage } from '../pages/contact/contact';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    ReservationPage,
    ResortsPage,
    SoonPage,
    FlightPage,
    ProfilePage,
    SerachPage,
    ContactPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    StarRatingModule,
    IonicPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    ReservationPage,
    ResortsPage,
    SoonPage,
    FlightPage,
    ProfilePage,
    SerachPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
