import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Crew } from 'src/app/models/crew.model';
import { Incident } from 'src/app/models/incident..model';
import { IncidentService } from 'src/app/services/incident-service/incident.service';
import { TeamService } from 'src/app/services/team-service/team.service';

@Component({
  selector: 'incident-crew',
  templateUrl: 'incident-crew.component.html',
  styleUrls: ['incident-crew.component.css']
})
export class IncidentCrewComponent{

  public crews: Crew[] = [];
  public inc: Incident;
  public selectedCrew: number;

  constructor(private incidentService:IncidentService, private teamService: TeamService) { 
    this.inc = incidentService.currentIncident;
    this.selectedCrew = incidentService.currentCrew;
    teamService.getCrews().subscribe(
      (res:any)=>{
        console.log(res.list);
        this.crews = res.list;
      },
      err=>
      {
        console.log(err);
      }
    )
  }

  ngOnDestroy()
  {
    this.incidentService.currentCrew = this.selectedCrew;
  }

}
