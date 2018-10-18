import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;
  error = false;
  anon: boolean;
  user: any;
  password: string;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });
    this.user = this.authService.getUser();
    this.usersService.getAll()
    .then((results) => {
      this.users = results;
    })
    .catch((error) => {
      console.log(error);
      this.error = true;
    });
  }
}
