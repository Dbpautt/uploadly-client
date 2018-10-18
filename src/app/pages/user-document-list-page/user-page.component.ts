import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserDocumentListPageComponent implements OnInit {
  id: string;
  error = false;
  user: any;
  documents: any;
  
  constructor(
    private userService: UsersService,
    private documentService: DocumentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) =>{
        this.id = params.id;
        this.userService.getOne(this.id)
          .then(user => this.user = user);
        this.documentService.getDocumentsForUser(this.id)
          .then((results) => {
            this.documents = results;
          })
          .catch((error) => {
            console.log(error);
            this.error = true;
      })
    });
  }
}
