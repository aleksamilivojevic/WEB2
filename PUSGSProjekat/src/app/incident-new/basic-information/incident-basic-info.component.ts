import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Device } from 'src/app/models/device.model';
import { Incident } from 'src/app/models/incident..model';
import { CallService } from 'src/app/services/call-service/call.service';
import { IncidentService } from 'src/app/services/incident-service/incident.service';
import { StreetService } from 'src/app/services/street-service/street.service';

@Component({
  selector: 'incident-basic-info',
  templateUrl: './incident-basic-info.component.html',
  styleUrls: ['./incident-basic-info.component.css']
})
export class IncidentBasicInfoComponent implements OnInit {
  
  registerForm!: FormGroup;
  public inc!:Incident

  constructor(private service:IncidentService, private streetService:StreetService, private callService:CallService) { }

  ngOnInit(): void {
    this.inc = this.service.currentIncident;
    
    var body:Device[] = this.service.currentDevices;
    this.streetService.getPriorityForDevices(body).subscribe(
      (res:any)=>{
        this.inc.priority = res.max;
        console.log(res.max);
      },
      err=>{
        console.log(err);
      }
    )

    this.callService.getCallsForDevices(body).subscribe(
      (res:any)=>{
        this.inc.calls = (res.retval).length;
      }
    )
  }

  ngOnDestroy():void{
    this.service.currentIncident = this.inc;
  }
}
