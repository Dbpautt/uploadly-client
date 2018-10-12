import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  password: string;
  username: string;


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
      }
      this.authService.login(data)
        .then((user) => {
          if(user.role === 'admin')
          this.router.navigate(['/dashboard']); 
          else this.router.navigate(['/profile']); 
        })
        .catch((err) => {
          this.error = err.error.code || 'unexpected'; 
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
