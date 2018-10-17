import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
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
        this.document = result;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
    })
  }
}