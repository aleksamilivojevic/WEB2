import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident..model';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { IncidentService } from 'src/app/services/incident-service/incident.service';

@Component({
  selector: 'safety-documents-basic-info',
  templateUrl: './safety-documents-basic-info.component.html',
  styleUrls: ['./safety-documents-basic-info.component.css']
})
export class SafetyDocumentsBasicInfoComponent implements OnInit {

  registerForm!: FormGroup;
  
    public inc!:Incident
  
    constructor(private service:IncidentService) {  }
  
    ngOnInit(): void {
      this.inc = this.service.currentIncident;//curr incident mora da se reset, vrv kad se klikne new ili mozda edit ako imamo
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
