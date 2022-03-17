import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Incident } from '../models/incident..model';
import { IncidentService } from '../services/incident-service/incident.service';
import { Call } from '../models/call.model';
import { Street } from '../models/street.model';
import { CallService } from '../services/call-service/call.service';
import { StreetService } from '../services/street-service/street.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Reason', 'Hazard', 'Streets', 'User'];
  dataSource!: MatTableDataSource<Incident>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  streets!:Street[];
  selectedStreet!:string;
  hazard!:string;
  comment!:string;
  selectedReason!:string;


  constructor(private callService:CallService, private streetService:StreetService) {
    streetService.getStreets().subscribe(
      (res:any)=>{
        this.streets = res.retval;
      },
      err=>{
        console.log(err);
      }
    )
    this.dataSource = new MatTableDataSource();
   }

  ngAfterViewInit(): void{

  }

  ngOnInit(): void {
  }

  onSubmit(){
    var body:Call = new Call();
    body.comment = this.comment;
    body.hazard = this.hazard;
    body.reason = this.selectedReason;
    body.street = this.selectedStreet;
    this.callService.addCall(body).subscribe(
      (res:any)=>{

      },
      err=>{
        console.log(err);
      }
    );
  }
}
