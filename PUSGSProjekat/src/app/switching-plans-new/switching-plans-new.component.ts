import { Component, OnInit } from '@angular/core';
import { Incident } from '../models/incident..model';
import { IncidentService } from '../services/incident-service/incident.service';

@Component({
  selector: 'switching-plans-new',
  templateUrl: './switching-plans-new.component.html',
  styleUrls: ['./switching-plans-new.component.css']
})
export class SwitchingPlansNewComponent implements OnInit {

  incidents: Incident[] = new Array();

  constructor(private service: IncidentService) {
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

  onSubmit() {
    this.service.addIncident().subscribe(
      (res:any)=>{

      }
    )
  }

}
