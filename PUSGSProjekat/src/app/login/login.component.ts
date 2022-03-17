import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginUser } from '../models/loginUser.model';
import { UserService } from '../services/user-service/user.service';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() title!: string;

  loginForm!: FormGroup;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.loginForm = new FormGroup({
      'username' : new FormControl(''),
      'password' : new FormControl('')
    });
  }

  onSubmit()
  {
    var body:LoginUser = {
      Username: this.loginForm.get('username')?.value,
      Password: this.loginForm.get('password')?.value
    }

    this.userService.login(body).subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        localStorage.setItem("FullName", res.name);
        localStorage.setItem("Role", res.role);
        this.loginForm.reset();
        console.log('logged in');
        this.router.navigateByUrl('/dashboard');
        this.toastr.success('You logged in!', 'Yay!');
      },
      err=>{
        console.log(err);
        this.toastr.error('Something went wrong');
      }
    )

    console.log(this.loginForm.get('username')?.value);
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }

}
