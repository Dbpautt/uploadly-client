import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})

export class DocumentCreateComponent implements OnInit {
  userId: string;
  uploader: FileUploader;
  id: string;
  documents: any;
  userdetail: any;
  feedback: string;
  name: string;
  type: any;
  description: any;
  uploadedBy: any;

  feedbackEnabled = false;
  processing = false;
  error = null;
  uploadSuccess = false;
  uploadError = false;
  
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.id = params.id
      this.uploader = new FileUploader({
        url: `http://localhost:3000/users/${params.id}/document/create`
      })
    })

    this.uploadedBy = this.authService.getUser()._id

    this.uploader.onSuccessItem = (item, response) => {
      this.uploadSuccess = true;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      this.uploadError = true;
    };
  }
  
  submitForm(form) {
    if (form.valid) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('name', this.name);
        form2.append('type', this.type);
        form2.append('description', this.description);
        form2.append('uploadedBy', this.uploadedBy);
      };
    }
    this.uploader.uploadAll();
    
  }
}
