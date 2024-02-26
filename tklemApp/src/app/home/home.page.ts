import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [MessageService],
})
export class HomePage implements OnInit {
  role: String = '';
  constructor(
    private messageService: MessageService,
    private router: Router,
    private location: Location,
    private requestService: RequestService
  ) {}

  async ngOnInit(): Promise<void> {
    (await this.requestService.getRequestApi('api/role')).subscribe(
      (data: any) => {
        this.role = data.message;
        switch (this.role) {
          case 'PARENT':
            this.router.navigate(['home/parent']);
            break;
          case 'RECEPTOR':
            this.router.navigate(['home/receptor']);
            break;
          default:
            this.location.back();
            break;
        }
      },
      (error) => {
        this.location.back();
      }
    );
  }
}
