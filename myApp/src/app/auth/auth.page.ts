import { Component, OnInit } from '@angular/core';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  component = LoginPage;
  constructor() {}

  ngOnInit() {}
}
