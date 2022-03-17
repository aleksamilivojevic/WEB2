import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Incident } from 'src/app/models/incident..model';
import { IncidentService } from 'src/app/services/incident-service/incident.service';

@Component({
  selector: 'switching-plans-basic-info',
  templateUrl: './switching-plans-basic-info.component.html',
  styleUrls: ['./switching-plans-basic-info.component.css']
})
export class SwitchingPlansBasicInfoComponent implements OnInit {

  registerForm!: FormGroup;
  public inc!: Incident

  constructor(private service:IncidentService) { }



  ngOnInit(): void {
    this.inc = this.service.currentIncident;
    this.initForm();
  }

  private initForm() {
    this.registerForm = new FormGroup({
        'date': new FormControl(''),
        'date1': new FormControl(''),
        'voltage': new FormControl(''),
        'description': new FormControl(''),
        'date2': new FormControl(''),
        'date3': new FormControl(''),
        'date4': new FormControl(''),
  
    });
  }

}
