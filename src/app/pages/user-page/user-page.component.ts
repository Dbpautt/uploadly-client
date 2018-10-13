import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  id: string;
  error = false;
  user: any;
  anon: boolean;
  userdetail: any;
  
  constructor(
    private authService:AuthService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });
    this.route.params
      .subscribe((params) =>{
        this.id = params.id;
        this.usersService.getUser(this.id)
          .then((result) => {
            this.userdetail = result;
          })
          .catch((error) => {
            console.log(error);
            this.error = true;
      })
    });
  }
}
