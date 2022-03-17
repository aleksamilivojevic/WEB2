import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() title!: string;

  userFullName!:string;
  show!:boolean

  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
    if(localStorage.token){
      this.show = true;
    }else{
      this.show = false;
    }
    this.userFullName = localStorage.getItem("FullName") as string;
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }

}
