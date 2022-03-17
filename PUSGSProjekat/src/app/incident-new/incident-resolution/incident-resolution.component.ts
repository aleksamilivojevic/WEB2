import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident..model';
import { IncidentService } from 'src/app/services/incident-service/incident.service';

@Component({
  selector: 'incident-resolution',
  templateUrl: './incident-resolution.component.html',
  styleUrls: ['./incident-resolution.component.css']
})
export class IncidentResolutionComponent implements OnInit {

  public causes:string[] = ["Weather", "Human Error", "Equipment Failure"];
  public subCauses:string[] = [];
  public selectedCause = "";
  public selectedSubCause = "";
  public selectedConstruction = "";
  public selectedMaterial = "";

  constructor(private service: IncidentService) {
    this.selectedCause = service.currentIncident.cause;
    this.selectedSubCause = service.currentIncident.subCause;
    this.selectedConstruction = service.currentIncident.construction;
    this.selectedMaterial = service.currentIncident.material;
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.service.currentIncident.cause = this.selectedCause;
    this.service.currentIncident.subCause = this.selectedSubCause;
    this.service.currentIncident.construction = this.selectedConstruction;
    this.service.currentIncident.material = this.selectedMaterial;
    console.log(this.service.currentIncident);
  }

  onCauseChange($event:any){
    console.log(this.selectedCause);
    if(this.selectedCause==="Weather"){
      this.subCauses = ["Lightning Strike", "Earthquake", "Floods"];
    }else if(this.selectedCause==="Human Error"){
      this.subCauses = ["Missuse","Overheat"];
    }else if(this.selectedCause==="Equipment Failure"){
      this.subCauses = ["Overcharged", "Breakdown"]
    }
  }
}
