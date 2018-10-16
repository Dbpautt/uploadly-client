import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  error = false;
  user: any;
  anon: boolean;
  documents: any;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });
    this.user = this.authService.getUser()


    this.documentService.getDocumentsForCurrentUser()
    .then((results) => {
      this.documents = results;
    })
    .catch((error) => {
      console.log(error);
      this.error = true;
    });
  }
}

