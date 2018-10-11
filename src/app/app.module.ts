import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';


import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [ RequireAnonGuard ] },
  { path: '**', component: NotFoundComponent, canActivate: [ InitAuthGuard ] }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PdfViewerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
