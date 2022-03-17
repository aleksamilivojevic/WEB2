import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Incident } from 'src/app/models/incident..model';
import { IncidentService } from 'src/app/services/incident-service/incident.service';


@Component({
  selector: 'work-requests-basic-info',
  templateUrl: './work-requests-basic-info.component.html',
  styleUrls: ['./work-requests-basic-info.component.css']
})
export class WorkRequestsBasicInfoComponent implements OnInit {


  registerForm!: FormGroup;

  public inc!:Incident

  constructor(private service:IncidentService) { }

  ngOnInit(): void {
    this.inc = this.service.currentIncident;//curr incident mora da se reset, vrv kad se klikne new ili mozda edit ako imamo
    this.initForm();
  }

  private initForm() {
    this.registerForm = new FormGroup({
      'type': new FormControl(''),
      'emergency': new FormControl(''),
      'id': new FormControl(''),
      'status': new FormControl(''),
      'workType': new FormControl(''),
      'company': new FormControl(''),
      'date1': new FormControl(''),
      'date2': new FormControl(''),
      'incident': new FormControl(''),
      'phoneNo': new FormControl(''),
      'createdBy': new FormControl(''),
      'date3': new FormControl(''),
      'purpose': new FormControl(''),
      'details': new FormControl(''),
      'notes': new FormControl(''),

    });
  }



}
