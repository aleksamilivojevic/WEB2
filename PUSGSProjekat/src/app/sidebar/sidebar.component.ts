import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  show! : boolean
  constructor() { }

  ngOnInit(): void {
    if(localStorage.token){
      this.show = true;
    }
    else
    {
      this.show = false;
    }
  }

}
