import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user: any;
  loading = true;
  isLogin = true;
  isSignup = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
      this.loading = false;
      this.user = this.authService.getUser();
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
