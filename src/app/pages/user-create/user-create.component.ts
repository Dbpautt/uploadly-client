import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  error = null;
  feedbackEnabled = false;
  processing = false;
  username: string;
  password: string;


  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
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
      this.usersService.createUser(data)
        .then(() => {
          this.router.navigate(['/dashboard']); 
        })
        .catch((err) => {
          this.error = err.error.code || 'unexpected'; 
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
