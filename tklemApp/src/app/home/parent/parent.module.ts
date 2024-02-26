import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentPageRoutingModule } from './parent-routing.module';

import { ParentPage } from './parent.page';
import { DataViewModule } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { RequestService } from 'src/app/service/request.service';
import { Storage } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentPageRoutingModule,
    IonicModule,
    DataViewModule,
    AvatarModule,
    AvatarGroupModule,
    TagModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    DialogModule,
    ToastModule,
    ProgressSpinnerModule,
    MessagesModule,
  ],
  declarations: [ParentPage],
  providers: [MessageService, RequestService, Storage],
})
export class ParentPageModule {}
