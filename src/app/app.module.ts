import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUploadModule } from 'ng2-file-upload';

import { InitialsPipe } from './pipes/initials.pipe';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { DocumentCreateComponent } from './pages/document-create/document-create.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { RequireAdminGuard } from './guards/require-admin.guard';
import { DocumentsComponent } from './components/documents/documents.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [ InitAuthGuard ]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/create', component: UserCreateComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/:id', component: UserPageComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/:id/document/create', component: DocumentCreateComponent, canActivate: [ RequireAdminGuard ] },
  { path: '**', component: NotFoundComponent, canActivate: [ InitAuthGuard ] }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    DashboardComponent,
    UsersComponent,
    UserPageComponent,
    UserCreateComponent,
    DocumentCreateComponent,
    InitialsPipe,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PdfViewerModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
