import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Incident } from '../models/incident..model';
import { IncidentService } from '../services/incident-service/incident.service';

@Component({
  selector: 'switching-plans',
  templateUrl: './switching-plans.component.html',
  styleUrls: ['./switching-plans.component.css']
})
export class SwitchingPlansComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'type', 'voltage', 'scheduledTime'];
  dataSource!: MatTableDataSource<Incident>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:IncidentService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.service.getIncident().subscribe(
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
