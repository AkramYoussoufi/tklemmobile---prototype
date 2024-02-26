import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/model/Student';
import { Location } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  entitys!: any[];
  isLoading: boolean = false;
  IsBoxActive: boolean = false;
  massarCode: string = '';

  constructor(
    private messageService: MessageService,
    public location: Location,
    private requestService: RequestService,
    private storage: Storage,
    private router: Router
  ) {}
  async ngOnInit(): Promise<void> {

    (
      await this.requestService.getRequestApi('api/student/mystudents')
    ).subscribe(
      (data: any) => {
        this.entitys = data;
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Echec',
          detail:
            "Une erreur s'est produite lors du chargement de votre élève, réessayez",
          life: 10000,
          closable: true,
        });
      }
    );
  }

  async deleteStudent(massarCode: any, index: number) {
    (
      await this.requestService.postRequestApi('api/student/deletestfrpr', {
        massarCode: massarCode,
      })
    ).subscribe(
      (data) => {
        this.entitys = this.entitys.filter((_, i) => i !== index);
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: "L'élève a été supprimé avec succès",
          life: 10000,
          closable: true,
        });
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Echec',
          detail:
            "Une erreur s'est produite lors du traitement de votre demande",
          life: 10000,
          closable: true,
        });
      }
    );
  }
  async logout() {
    await this.storage.remove('token');
    this.router.navigate(['/auth']);
  }

  showDialog() {
    this.IsBoxActive = true;
  }
  async requestDemade() {
    (
      await this.requestService.postRequestApi('api/demand/edit/parent', {
        massarCode: this.massarCode,
      })
    ).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail:
            "La demande a été envoyée avec succès, veuillez attendre l'approbation de l'administrateur",
          life: 10000,
          closable: true,
        });
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Echec',
          detail:
            "Une erreur s'est produite lors du traitement de votre demande",
          life: 10000,
          closable: true,
        });
      }
    );
    this.IsBoxActive = false;
  }
}
