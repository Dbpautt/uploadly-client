import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  anon: boolean;
  user: any;
  loading = true;
  isLogin = true;
  isSignup = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });
  }

  handleLoginClick() {
    this.isLogin = true;
    this.isSignup = false;
  }

  handleSignupClick() {
    this.isLogin = false;
    this.isSignup = true;
  }
  

}
