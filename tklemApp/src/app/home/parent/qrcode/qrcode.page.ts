import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  qrCodeValue: any = '';
  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private storage: Storage,
    private router: Router,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.qrCodeValue = this.route.snapshot.queryParamMap.get('massarCode');
  }
  async logout() {
    await this.storage.remove('token');
    this.router.navigate(['/auth']);
  }
}
