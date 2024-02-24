import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.page.html',
  styleUrls: ['./forgotpw.page.scss'],
})
export class ForgotpwPage implements OnInit {
  message!: Message[];
  isLoading: boolean = false;
  constructor() {}

  ngOnInit() {}
}
