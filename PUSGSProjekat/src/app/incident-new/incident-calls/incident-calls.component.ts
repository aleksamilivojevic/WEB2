import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Call } from 'src/app/models/call.model';
import { Device } from 'src/app/models/device.model';
import { CallService } from 'src/app/services/call-service/call.service';
import { IncidentService } from 'src/app/services/incident-service/incident.service';

@Component({
  selector: 'incident-calls',
  templateUrl: 'incident-calls.component.html',
  styleUrls: ['incident-calls.component.css']
})
export class IncidentCallsComponent implements AfterViewInit {

  displayedColumns: string[] = ['reason', 'hazard', 'street', 'userId'];
  dataSource: MatTableDataSource<Call>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private callService:CallService, private incidentService:IncidentService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    var body:Device[] = this.incidentService.currentDevices;
    this.callService.getCallsForDevices(body).subscribe(
      (res:any)=>{
        this.dataSource = res.retval;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err=>{
        console.log(err);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
