import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResortsPage } from './resorts';

@NgModule({
  declarations: [
    ResortsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResortsPage),
  ],
})
export class ResortsPageModule {}
