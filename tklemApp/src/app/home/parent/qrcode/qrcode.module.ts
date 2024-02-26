import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodePageRoutingModule } from './qrcode-routing.module';

import { QrcodePage } from './qrcode.page';
import { QRCodeModule } from 'angularx-qrcode';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { RouterModule } from '@angular/router';

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
  declarations: [QrcodePage, LogoutComponent],
})
export class QrcodePageModule {}
