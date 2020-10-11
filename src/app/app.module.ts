import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './master/home/home.component';
import { CourseComponent } from './master/course/course.component';
import { AuthorComponent } from './master/author/author.component';
import { StudentComponent } from './master/student/student.component';
import { EnrollComponent } from './master/enroll/enroll.component';

import { MasterComponent  } from "./master/master.component";
import { AboutComponent  } from "./master/about.component";
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CourseComponent, 
    AuthorComponent, 
    StudentComponent,
    EnrollComponent,
    MasterComponent,
    AboutComponent ,


  ],
  imports: [



    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({
      progressBar: true,
      timeOut:1000,
      progressAnimation: "increasing",
      preventDuplicates: true,
      positionClass: 'toast-top-right',
    }),
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
