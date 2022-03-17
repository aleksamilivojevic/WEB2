import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../models/incident..model';
import { IncidentService } from '../services/incident-service/incident.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.css']
})
export class IncidentNewComponent implements OnInit {

  incidents:Incident[] = new Array();

  constructor(private service: IncidentService, private router:Router, private toastr: ToastrService) {
      let temp = new Incident;
      temp.id = "WR1";
      temp.incidentTime = new Date();
      temp.status = "Draft";
      temp.address = "TestAddr";
      this.incidents.push(temp);
      this.incidents.push(temp);
      this.incidents.push(temp);
      this.incidents.push(temp);
      this.incidents.push(temp);
      this.incidents.push(temp);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addIncident().subscribe(
      (res:any)=>{
        this.router.navigateByUrl("/incident-browser");
        this.toastr.success('You successfully added new incident!');
      },
      err=>{
        console.log(err);
        this.toastr.error('something went wrong');
      }
    )
  }

}
