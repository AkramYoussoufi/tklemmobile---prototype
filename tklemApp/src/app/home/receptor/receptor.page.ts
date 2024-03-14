import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MessageService } from 'primeng/api';
import { RequestService } from 'src/app/service/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {
  isLoading: boolean = false;
  constructor(
    private messageService: MessageService,
    private requestService: RequestService,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {}

  async logout() {
    await this.storage.remove('token');
    this.router.navigate(['/auth']);
  }

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
      console.log(result.content);
      (
        await this.requestService.postRequestApi('api/reciever/call', {
          massarCode: result.content,
        })
      ).subscribe(
        (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Le destinataire a été averti avec succès',
            life: 10000,
          });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Echec',
            detail:
              "Une erreur s'est produite lors du traitement de votre demande",
            life: 10000,
          });
        }
      );
    }
  }
}
