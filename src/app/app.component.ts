import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uploadly-client';
  pdfSrc: string = 'https://res.cloudinary.com/drtjvxqyi/image/upload/v1539186956/Factura_180901_-_Printsome.pdf';
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
}

