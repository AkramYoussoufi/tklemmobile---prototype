import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  component = RegisterPage;
  message!: Message[];
  isLoading: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  loginRequest() {
    this.router.navigate(['/home']);
  }
}
