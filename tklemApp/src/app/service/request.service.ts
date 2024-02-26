import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient, private storage: Storage) {
    this.initializeHeaders();
  }

  async initializeHeaders() {
    await this.storage.create();
    this.headers = this.headers.set('Content-Type', 'application/json');
  }

  async getRequestApi(api: string) {
    let headers = this.headers;
    if (!api.includes('auth')) {
      headers = this.headers.set(
        'Authorization',
        'Bearer ' + (await this.storage.get('token'))
      );
    }
    return this.httpClient.get('http://localhost:8080/' + api, {
      headers: headers,
    });
  }

  async postRequestApi(api: string, body: any) {
    let headers = this.headers;
    if (!api.includes('auth')) {
      headers = this.headers.set(
        'Authorization',
        'Bearer ' + (await this.storage.get('token'))
      );
    }
    return this.httpClient.post('http://localhost:8080/' + api, body, {
      headers: headers,
    });
  }
}
