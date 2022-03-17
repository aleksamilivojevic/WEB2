import { Component, OnInit } from '@angular/core';
import { Incident } from '../models/incident..model';
import { IncidentService } from '../services/incident-service/incident.service';

@Component({
  selector: 'safety-documents-add',
  templateUrl: './safety-documents-add.component.html',
  styleUrls: ['./safety-documents-add.component.css']
})
export class SafetyDocumentsAddComponent implements OnInit {

  incidents:Incident[] = new Array();
  
    constructor(private service:IncidentService) {
      //pull data from api, remove mock
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
          //idk dodati posle
        }
      )
    }

}
