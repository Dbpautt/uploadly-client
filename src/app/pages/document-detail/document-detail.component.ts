import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-detail-page',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailPageComponent implements OnInit {
  title = 'uploadly-client';
  user: any;
  id: string;
  document: any;
  file: string;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.route.params
    .subscribe((params) =>{
      this.id = params.id;
      this.documentService.getDocumentDetail(this.id)
      .then((result) => {
        console.log(result.file)
        this.document = result;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
    })
  }
}