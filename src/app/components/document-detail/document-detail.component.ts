import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  @Input() document: any;


  constructor() { }

  ngOnInit() {
  }

}
