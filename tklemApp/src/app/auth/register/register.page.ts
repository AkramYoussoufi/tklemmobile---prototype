import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { RequestService } from 'src/app/service/request.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: any;
  isLoading: boolean = false;
  message: Message[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private requestService: RequestService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      cin: ['', Validators.required],
      massarCode: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async registerRequest() {
    console.log('asdasd');
    if (this.registerForm.valid) {
      this.isLoading = true;
      const formData = this.registerForm.value;
      try {
        const response = await (
          await this.requestService.postRequestApi('api/auth/add/parent', {
            name: this.registerForm.get('name').value,
            email: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value,
            cin: this.registerForm.get('cin').value,
            studentsMassarCode: [this.registerForm.get('massarCode').value],
          })
        ).toPromise();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail:
            "Votre demande a ete envoye a le responsable vous devez attende jusqu'a que votre demand et approve",
          life: 6000,
          closable: false,
        });
        this.router.navigate(['/auth']);
      } catch (error) {
        console.error('Error occurred:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Echec',
          detail: "Une erreur s'est produite",
          life: 6000,
          closable: false,
        });
      } finally {
        this.isLoading = false;
      }
    }
  }
}
