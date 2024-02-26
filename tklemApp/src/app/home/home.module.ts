import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RequestService } from '../service/request.service';
import { Storage } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    ProgressSpinnerModule,
  ],
  declarations: [HomePage],
  providers: [RequestService, Storage],
})
export class HomePageModule {}
