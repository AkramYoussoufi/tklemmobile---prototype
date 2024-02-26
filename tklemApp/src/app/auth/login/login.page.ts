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

  ngOnInit() {}

  async loginRequest() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const formData = this.loginForm.value;
      (
        await this.requestService.postRequestApi('api/auth/signup', formData)
      ).subscribe(
        (data: any) => {
          this.storage.remove('token');
          this.storage.set('token', data.token);
          this.router.navigate(['/home']);
          this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Echec',
            detail: "Une erreur s'est produite",
            life: 6000,
            closable: false,
          });
        }
      );
    }
  }
}
