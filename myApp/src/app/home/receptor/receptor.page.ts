import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {
  isLoading: boolean = false;
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  async scanQRCode() {
    const options: any = {
      preferFrontCamera: false, // Set to true if you prefer the front camera
      showFlipCameraButton: true, // Show the flip camera button
      showTorchButton: true, // Show the torch button (flashlight)
      prompt: 'Place QR code inside the scan area', // Text shown to the user during the scan
      formats: 'QR_CODE', // Specify the barcode formats to scan
      resultDisplayDuration: 0, // Duration to display the scanned result (0 for no duration)
      orientation: 'portrait', // Set the orientation of the scanner (portrait, landscape, or unspecified)
    };

    const result = await BarcodeScanner.startScan(options);

    if (result.hasContent) {
      console.log('Scanned QR code data:', result.content);
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Le destinataire a été averti avec succès',
        life: 10000,
      });
    }
  }
}
