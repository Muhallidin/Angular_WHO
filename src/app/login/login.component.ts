import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/shared/user.service';



import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName: string;

  formModel = {
    UserName : "Muhalllidin",
    Password : "Password@123"
  }


  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  onSubmit(Form:NgForm)
  {
    console.log();
    this.router.navigate(['/home']);

    // this.service.login(Form.value).subscribe(
    //   (res:any) => {
    //     this.UserName = Form.value.UserName;
    //     localStorage.setItem('token', res);
    //     localStorage.setItem('UserName', Form.value.UserName);
    //     // this.router.navigate(['/violation'], { queryParams: { uname: Form.value.UserName} });
    //     this.router.navigate(['/violation']);
    //   },
    //   err =>{
    //       if(err.status== 400)
    //         this.toastr.error('Incorrerct UserName or Password !','',
    //         {
    //           progressBar: true,
    //           timeOut: 500,
    //           progressAnimation: 'increasing'
    //         });
    //       else
    //         console.log(err);
    //   }
    // );
  }


}
