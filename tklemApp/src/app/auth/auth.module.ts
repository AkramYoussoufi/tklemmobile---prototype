import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { MessageService } from 'primeng/api';
import { Storage } from '@ionic/storage';
import { RequestService } from '../service/request.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
  ],
  declarations: [AuthPage],
  providers: [MessageService, Storage, RequestService],
})
export class AuthPageModule {}
