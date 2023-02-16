import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramsComponent } from './programs/programs.component';
import { SigninComponent } from './signin/signin.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'us',
        component: UsComponent,
      },
      {
        path: 'programs',
        component: ProgramsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'editprofile',
        component: EditprofileComponent,
      },
      {
        path: 'editpassword',
        component: EditpasswordComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },      
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
