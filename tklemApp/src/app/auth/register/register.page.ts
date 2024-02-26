import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  message: Message[] = [];
  isLoading: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  requestSignup() {
    this.router.navigate(['/auth/login']);
  }
}
