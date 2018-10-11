import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = {
        username: this.username,
        password: this.password
      };
      this.authService.signup(data)
        .then(() => {
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.code || 'unexpected'; 
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}