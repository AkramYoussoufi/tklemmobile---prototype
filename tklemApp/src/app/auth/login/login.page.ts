import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { RegisterPage } from '../register/register.page';
import { RequestService } from 'src/app/service/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  component = RegisterPage;
  message!: Message[];
  isLoading: boolean = false;
  loginForm: any;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private requestService: RequestService,
    private formBuilder: FormBuilder,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    await this.storage.remove('token');
  }

  async loginRequest() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const formData = this.loginForm.value;
      (
        await this.requestService.postRequestApi('api/auth/signup', formData)
      ).subscribe(
        async (data: any) => {
          await this.storage.remove('token');
          await this.storage.set('token', data.token);
          await this.router.navigate(['/home']);
          this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Echec',
            detail: error.error.message,
            life: 60000,
            closable: false,
          });
        }
      );
    }
  }
}
