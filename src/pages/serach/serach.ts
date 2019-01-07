import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import { ReservationPage } from '../reservation/reservation';



@IonicPage()
@Component({
  selector: 'page-serach',
  templateUrl: 'serach.html',

})
export class SerachPage {
  public states: any[];
  public districts: any[];
  public cities: any[];

  public selectedDistricts: any[];
  public selectedCities: any[];

  public sState: any;
  public sDistrict: any;

  appName = 'Ionic App';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.initializeState();
    this.initializeDistrict();
     
    this.initializeCity();
}

initializeState(){
  const loader = this.loadingCtrl.create({
    content: "جاري العمل ..",
    duration: 500
  });
  loader.present();
this.states = [
    {id: 1, name: 'الشرقية'},
    {id: 2, name: 'الوسطى'},
    {id: 3, name: 'الغربية'},
    {id: 4, name: 'الشمالية'},
    {id: 5, name: 'الجنوبية'}
];
}

initializeDistrict(){
this.districts = [
  
    {id: 1, name: 'الدمام', state_id: 1, state_name: 'الخبر'},
    {id: 2, name: 'الاحساء', state_id: 1, state_name: 'Melaka'},

    {id: 3, name: 'الرياض', state_id: 2, state_name: 'Johor'},

    {id: 4, name: 'جدة', state_id: 3, state_name: 'Johor'},
    {id: 5, name: 'مكة', state_id: 3, state_name: 'Johor'},
    {id: 6, name: 'المدينة', state_id: 3, state_name: 'Johor'},
    {id: 7, name: 'ينبع', state_id: 3, state_name: 'Johor'},

    {id: 8, name: 'تبوك', state_id: 4, state_name: 'Selangor'},

    {id: 9, name: 'عسير', state_id: 5, state_name: 'Selangor'},

    {id: 10, name: 'جيزان', state_id: 5, state_name: 'jizan'}

];
}

initializeCity(){
this.cities = [
    {id: 1, name: 'الظهران', state_id: 1, district_id: 1},
    {id: 2, name: 'الخبر', state_id: 1, district_id: 1},
    {id: 2, name: 'الدمام', state_id: 1, district_id: 1},

    {id: 3, name: 'الاحساء', state_id: 1, district_id: 2},

    {id: 4, name: 'شمال الرياض', state_id: 2, district_id: 3},
    {id: 5, name: 'غرب الرياض', state_id: 2, district_id: 3},
    {id: 5, name: 'جنوب الرياض', state_id: 2, district_id: 3},
    {id: 5, name: 'شرق الرياض', state_id: 2, district_id: 3},
    {id: 5, name: 'الخرج', state_id: 2, district_id: 3},
    {id: 5, name: 'الافلاج', state_id: 2, district_id: 3},

    {id: 6, name: 'الحمراء', state_id: 3, district_id: 4},
    {id: 6, name: 'العزيزية', state_id: 3, district_id: 4},
    {id: 6, name: 'أبحر', state_id: 3, district_id: 4},

    {id: 6, name: 'قريش', state_id: 3, district_id: 5},
    {id: 6, name: 'المدائن', state_id: 3, district_id: 5},

    {id: 6, name: 'الواجهة البحرية', state_id: 3, district_id: 7},
    {id: 6, name: 'المجد', state_id: 3, district_id: 7},
    {id: 6, name: 'البحيرة', state_id: 3, district_id: 7},

    {id: 6, name: 'طيبة', state_id: 3, district_id: 6},
    {id: 6, name: 'العيون', state_id: 3, district_id: 6},
    {id: 6, name: 'شوران', state_id: 3, district_id: 6},

    {id: 7, name: 'ضباء', state_id: 4, district_id: 8},
    {id: 7, name: 'الوجه', state_id: 4, district_id: 8},
    {id: 7, name: 'شرما', state_id: 4, district_id: 8},

    {id: 8, name: 'أبها', state_id: 5, district_id: 9},
    {id: 9, name: 'خميس مشيط', state_id: 5, district_id: 9},
    {id: 9, name: 'الدرب', state_id: 5, district_id: 9},
    {id: 9, name: 'الشقيق', state_id: 5, district_id: 9},
    {id: 9, name: 'محايل عسير', state_id: 5, district_id: 9},

    {id: 10, name: 'جيزان', state_id: 5, district_id: 10},
    {id: 11, name: 'صبياء', state_id: 5, district_id: 10},
    {id: 12, name: 'أبوعريش', state_id: 5, district_id: 10},
    {id: 13, name: 'صامطة', state_id: 5, district_id: 10},
    {id: 14, name: 'بيش', state_id: 5, district_id: 10}
];
}

setDistrictValues(sState) {
  const loader = this.loadingCtrl.create({
    content: "تحديث المدن ..",
    duration: 1000
  });
  loader.present();
    this.selectedDistricts = this.districts.filter(district => district.state_id == sState.id)
}

setCityValues(sDistrict) {
    this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
}
Gores(){
  const loader = this.loadingCtrl.create({
    content: "تحميل الاماكن السياحية  ..",
    duration: 1500
  });
  loader.present();
  this.navCtrl.setRoot(ReservationPage)
}
 
 }

