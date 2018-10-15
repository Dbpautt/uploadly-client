import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {
  @Input() users: any;

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/users/${this.users}/documents`
  });

  feedbackEnabled = false;
  processing = false;
  error = null;
  id: string;
  documents: any;
  userdetail: any;
  feedback: string;
  name: '';
  type: any;
  description: any;
  uploadedBy: any;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.uploader.onSuccessItem = (item, response) => {
      this.usersService.getDocuments(this.id)
      .then((results) => {
        this.documents = results;
      });
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }
  
  submitForm(form) {
    if (form.valid) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('name', this.name);
      };
    }
    this.uploader.uploadAll();
  }
}
