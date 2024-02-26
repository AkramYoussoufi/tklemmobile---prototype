import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  providers: [RequestService, Storage],
})
export class LogoutComponent implements OnInit {
  constructor(
    private storage: Storage,
    private requestService: RequestService,
    private router: Router
  ) {}

  ngOnInit() {}

  async logout() {
    await this.storage.remove('token');
    this.router.navigate(['/auth']);
  }
}
