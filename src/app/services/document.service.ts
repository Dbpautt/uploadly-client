import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getDocumentsForUser(userId): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${userId}/documents`, options)
      .toPromise();
  }

  getDocumentsForCurrentUser(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/profile/documents`, options)
      .toPromise();
  }
}
