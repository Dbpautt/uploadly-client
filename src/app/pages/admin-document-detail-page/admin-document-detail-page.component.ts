import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-admin-document-detail-page',
  templateUrl: './admin-document-detail-page.component.html',
  styleUrls: ['./admin-document-detail-page.component.scss']
})
export class AdminDocumentDetailPageComponent implements OnInit {
  title = 'uploadly-client';
  user: any;
  id: string;
  document: any;
  file: string;
  error = false;
  docId: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private documentService: DocumentService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.route.params
    .subscribe((params) =>{
      this.id = params.userid;
      console.log(params);  
      this.documentService.getDocumentsForUser(this.id)
      .then((results) => {
        this.document = results;
        this.docId = params.docid;
        this.documentService.getAdminDocumentDetail(this.id, this.docId)
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
    })
  }

}
