import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodePageRoutingModule } from './qrcode-routing.module';

import { QrcodePage } from './qrcode.page';
import { QRCodeModule } from 'angularx-qrcode';
import { Storage } from '@ionic/storage';
import { RouterModule } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodePageRoutingModule,
    IonicModule,
    QRCodeModule,
    RouterModule,
  ],
  declarations: [QrcodePage],
  providers: [Storage, RequestService],
})
export class QrcodePageModule {}
