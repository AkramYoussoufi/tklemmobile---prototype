import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [MessageService],
})
export class HomePage implements OnInit {
  role: String = 'reciever';
  constructor(
    private messageService: MessageService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    switch (this.role) {
      case 'parent':
        this.router.navigate(['home/parent']);
        break;
      case 'receptor':
        this.router.navigate(['home/receptor']);
        break;
      case 'reciever':
        this.router.navigate(['home/reciever']);
        break;
      default:
        this.location.back();
        break;
    }
  }
}
