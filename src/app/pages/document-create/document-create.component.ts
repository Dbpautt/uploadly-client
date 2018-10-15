import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {
  @Input() users: any;

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/users/${user._id}/documents`
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
    private documentsService: DocumentsService
  ) {}

  ngOnInit () {
    this.documentsService.getAll()
      .then((results) => {
        this.documents = results;
      });

    this.uploader.onSuccessItem = (item, response) => {
      this.documentsService.getAll()
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
