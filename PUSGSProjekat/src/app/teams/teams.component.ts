import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Crew } from '../models/crew.model';
import { Incident } from '../models/incident..model';
import { IncidentService } from '../services/incident-service/incident.service';
import { TeamService } from '../services/team-service/team.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource!: MatTableDataSource<Crew>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service:TeamService) { 
    this.dataSource = new MatTableDataSource();
   }

   ngAfterViewInit() {
    this.service.getCrews().subscribe(
      (res:any)=>{
        console.log(res.list);
        this.dataSource = new MatTableDataSource(res.list);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
