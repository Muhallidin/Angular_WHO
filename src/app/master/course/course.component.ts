import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Course } from "../../model/course";

import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css', '../../../assets/bootstrap/css/bootstrap.min.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CourseService, private router: Router, private toastr: ToastrService) { }
  UserName: string;
  CourseCode: string;
  Course: string;
  
  formModel = {
    coursecode : "BSCS",
    course : "",
    id: ""
  }

  ngOnInit(): void {
  }
  
  displayCourseColumns = ['Id','Course Code', 'action' ];
  dataCourse: any = []; 
  sourceCourse: Course[] = [];
  
  OnCreate(form:NgForm)
  {

    this.service.Create(form).subscribe(
      (res:any) => {
        this.formModel.id = res
      },
      (err:any) =>{
        if(err.status== 500)
        {
          this.toastr.error('Server Error','',
          {
            progressBar: true,
            timeOut: 500,
            progressAnimation: 'increasing'
          });
        }
        else
        {
          console.log(err);
        }
      }
    );
  }

  GetCourse(id:any)
  {
 
    this.service.GetCourse(id).subscribe(

      (res:any) => {
        this.formModel.id = "";
        this.formModel.course = res.course;
        this.formModel.coursecode = res.courseCode;
      },
      err =>{
          if(err.status== 400)
            this.toastr.error('Noo record Found !','',
            {
              progressBar: true,
              timeOut: 500,
              progressAnimation: 'increasing'
            });
          else
            console.log(err);
      }
    );
  }

  
  GetAllCourse()
  {
    this.service.GetAllCourses().subscribe( 
      (res:any) => {

        for (const d of (res as any)) {
          this.dataCourse.push(
          {
            id: d.id,
            course: d.course,
            courseCode: d.courseCode
          })}
      },
      err =>{
          if(err.status== 400)
            this.toastr.error('Noo record Found !','',
            {
              progressBar: true,
              timeOut: 500,
              progressAnimation: 'increasing'
            });
          else
            console.log(err);
      }

    );
  }
 
}
