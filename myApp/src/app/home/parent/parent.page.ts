import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/model/Student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  entitys: Student[] = [];
  isLoading: boolean = false;
  IsBoxActive: boolean = false;

  constructor(
    private messageService: MessageService,
    public location: Location
  ) {}
  ngOnInit(): void {}

  showDialog() {
    this.IsBoxActive = true;
  }
  requestDemade() {
    this.IsBoxActive = false;
  }
}
