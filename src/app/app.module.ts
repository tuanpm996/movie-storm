import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonDesignModule } from './common-design/common-design.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { SideInfoComponent } from './movie-page/side-info/side-info.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthService } from './auth.service';
import { MovieService } from './movie.service';

const appRoutes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'movie/:id', component: MoviePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    LoginPageComponent,
    MoviePageComponent,
    SideInfoComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CommonDesignModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
