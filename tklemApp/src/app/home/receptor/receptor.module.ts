import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptorPageRoutingModule } from './receptor-routing.module';

import { ReceptorPage } from './receptor.page';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RequestService } from 'src/app/service/request.service';
import { Storage } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptorPageRoutingModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
  ],
  declarations: [ReceptorPage],
  providers: [MessageService, RequestService, Storage],
})
export class ReceptorPageModule {}
