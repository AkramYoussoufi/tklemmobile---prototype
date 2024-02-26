import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  qrCodeValue: any = '';
  constructor(public location: Location, private route: ActivatedRoute) {}

  ngOnInit() {
    this.qrCodeValue = this.route.snapshot.queryParamMap.get('massarCode');
  }
}
