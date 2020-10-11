import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  UserName: string;

  constructor(private http: HttpClient , private router: Router) { }
//   private readonly BaseURI = 'http://localhost/MLCapiservices/api';
  private readonly BaseURI = 'http://localhost/api/v1.0';

  Create(form:any) {
    return this.http.post(this.BaseURI + '/api/v1.0/Courses', form);
  }
  GetAllCourses() {
    return this.http.get(this.BaseURI + '/api/v1.0/Courses');
  }
  GetCourse(Id:any) {
    return this.http.get(this.BaseURI + '/api/v1.0/Course' + Id);
  }

}
