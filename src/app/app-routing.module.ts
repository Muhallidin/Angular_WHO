import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


import { MasterComponent  } from "./master/master.component";
import { AboutComponent  } from "./master/about.component";

import { HomeComponent  } from "./master/home/home.component";

import { AuthorComponent  } from "./master/author/author.component";
import { CourseComponent  } from "./master/course/course.component";
import { StudentComponent } from "./master/student/student.component";
import { EnrollComponent } from "./master/enroll/enroll.component";

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'HomemasterComponent' },

  // { path: 'home', component: HomeComponent, loadChildren: () => import('./home/home-module').then(m => m.HomeModule )},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: HomeComponent
      }
    ]
  },

  {
    path: 'author',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: AuthorComponent
      }
    ]
  },

  {
    path: 'course',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: CourseComponent
      }
    ]
  },

  {
    path: 'student',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: StudentComponent
      }
    ]
  },
  {
    path: 'enroll',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: EnrollComponent
      }
    ]
  },
  
  {
    path: 'about',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: AboutComponent
      }
    ]
  },

  ]
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
