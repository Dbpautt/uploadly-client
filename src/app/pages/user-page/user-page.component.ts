import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  error = false;
  user: any;
  anon: boolean;
  userdetail: any;

  constructor(
    private authService:AuthService,
    private usersService: UsersService,
    private router:Router
    ) { }

  ngOnInit() {
  
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });
    this.usersService.getUser()
    // .then((results) => {
    //   this.userdetail = results;
    // })
    // .then(() => this.router.navigate([`/user/${this.userdetail.id}`]))
    // .catch((error) => {
    //   console.log(error);
    //   this.error = true;
    });






  }

}
