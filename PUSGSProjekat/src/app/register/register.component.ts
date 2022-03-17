import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Crew} from '../models/crew.model';
import {RegisterUser} from '../models/registerUser.model'
import { TeamService } from '../services/team-service/team.service';
import {UserService} from '../services/user-service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm!: FormGroup;

  selectedRole!:string;
  crews: Crew[] = [];

  selectedCrew!:Crew;

  url:any;

  constructor(private userService: UserService, private router:Router, private teamService:TeamService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.teamService.getCrews().subscribe(
      (res:any)=>{
        this.crews = res.list;
        console.log(res.list);
      },
      err=>{
        console.log(err);
      }
    )
    this.initForm();
  }

  private initForm() {
    this.registerForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),
      'repeat': new FormControl(''),
      'email': new FormControl(''),
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'date': new FormControl(''),
      'address': new FormControl(''),
      'image': new FormControl(null)
    });
  }

  onSubmit() {
    //validacija da li je username in use, da li su passwordi isti itd
    var body:RegisterUser = {
      Username:this.registerForm.get('username')?.value,
      Email:this.registerForm.get('email')?.value,
      Password:this.registerForm.get('password')?.value,
      FullName:this.registerForm.get('firstName')?.value + " " + this.registerForm.get('lastName')?.value,
      DOB:this.registerForm.get('date')?.value,
      Street:this.registerForm.get('address')?.value,
      Role:"",
      CrewID:-1
    };
    body.Role = this.selectedRole;
    if(this.selectedRole == "Crew Member"){
      body.CrewID = this.selectedCrew.id;
    }
    this.userService.register(body).subscribe(
      (res:any)=>{
        this.registerForm.reset();
        console.log("worked");
        this.router.navigateByUrl('/');
        this.toastr.success('You succesfully registered!');
      },
      err=>{
        console.log(err);
        this.toastr.error('Something went wrong');
      }
    );
  }

  onSelectFile(event:any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.log(event.target.files[0]);

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
        console.log(this.registerForm.get('image')?.value);
      }
    }
}
}
