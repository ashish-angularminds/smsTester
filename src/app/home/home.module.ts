import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SmsServiceService } from '../services/sms-service.service';
import { SMSInboxReader, SMSInboxReaderPlugin } from 'capacitor-sms-inbox';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  providers: [SmsServiceService],
  declarations: [HomePage]
})
export class HomePageModule { }
