import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { UsComponent } from './us/us.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { PaypageComponent } from './paypage/paypage.component';
import { ContentComponent } from './courses/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsComponent,
    ProgramsComponent,
    ContactComponent,
    ProfileComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    EditprofileComponent,
    EditpasswordComponent,
    CoursesComponent,
    PaypageComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
