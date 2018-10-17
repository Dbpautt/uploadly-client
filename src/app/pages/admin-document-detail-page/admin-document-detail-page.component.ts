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
  userid: string;
  document: any;
  file: string;
  error = false;
  docid: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private documentService: DocumentService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.route.params
    .subscribe((params) =>{
      this.userid = params.userid;
      this.docid = params.docid;
      this.documentService.getAdminDocumentDetail(this.userid, this.docid)
        .then((result)=>{
        this.document = result;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
    })
  }

}
