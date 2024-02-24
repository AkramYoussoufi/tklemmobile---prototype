import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecieverPageRoutingModule } from './reciever-routing.module';

import { RecieverPage } from './reciever.page';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecieverPageRoutingModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
  ],
  declarations: [RecieverPage],
  providers: [MessageService],
})
export class RecieverPageModule {}
