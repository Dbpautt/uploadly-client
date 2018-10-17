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
    return this.httpClient.get(`${this.baseUrl}/users/${userId}/document`, options)
      .toPromise();
  }

  getDocumentsForCurrentUser(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/profile/document`, options)
      .toPromise();
  }
  
  getDocumentDetail(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/profile/document/${id}`, options)
      .toPromise();
  }

  getAdminDocumentDetail(id, docId): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}/document/${docId}`, options)
      .toPromise();
  }
}
