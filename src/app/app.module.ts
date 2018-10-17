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
import { UserDocumentListPageComponent } from './pages/user-document-list-page/user-page.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { DocumentCreateComponent } from './pages/document-create/document-create.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DocumentDetailPageComponent } from './pages/document-detail/document-detail.component';
import { AdminDocumentDetailPageComponent } from './pages/admin-document-detail-page/admin-document-detail-page.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersListComponent } from './components/users-list/users.component';
import { DocumentsListComponent } from './components/documents-list/documents.component';
import { DocumentDetailComponent } from './components/document-detail/document-detail.component';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { RequireAdminGuard } from './guards/require-admin.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [ InitAuthGuard ]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/create', component: UserCreateComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/:id', component: UserDocumentListPageComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/:id/document/create', component: DocumentCreateComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'user/:userid/document/:docid', component: AdminDocumentDetailPageComponent, canActivate: [ RequireAdminGuard ] },
  { path: 'profile', component: ProfileComponent, canActivate: [ RequireUserGuard ] },
  { path: 'profile/document/:id', component: DocumentDetailPageComponent, canActivate: [ RequireUserGuard ] },
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
    UsersListComponent,
    UserDocumentListPageComponent,
    UserCreateComponent,
    DocumentCreateComponent,
    InitialsPipe,
    DocumentsListComponent,
    ProfileComponent,
    DocumentDetailPageComponent,
    DocumentDetailComponent,
    AdminDocumentDetailPageComponent
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
