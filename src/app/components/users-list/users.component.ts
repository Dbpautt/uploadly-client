import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: any;

  constructor() { }

  ngOnInit() {
  }

}
