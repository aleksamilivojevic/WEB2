import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddDevice } from '../models/add.device.model';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from '../models/device.model';
import { DeviceService } from '../services/device-service/device.service';
import { IncidentService } from '../services/incident-service/incident.service';

@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.component.html',
  styleUrls: ['./device-modal.component.css']
})
export class DeviceModalComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'street'];
  dataSource: MatTableDataSource<Device>;

  selectedDeviceId!:string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialogRef: MatDialogRef<DeviceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: AddDevice, public dialog: MatDialog, private deviceService:DeviceService, private incidentService:IncidentService) {
    this.dataSource = new MatTableDataSource();
  }

  onNoClick():void{
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.deviceService.getDevices().subscribe(
      (res:any)=>{
          var temp:Device[] = res;
          var retval:Device[] = [];
          var toRemove:Device[] = this.incidentService.currentDevices;
          console.log(res);
          console.log(temp);
          console.log(retval);
          console.log(toRemove);
          temp.forEach(function (value) {
              var oke = true;
              toRemove.forEach(function(value1){
              if(value1.name === value.name){
                oke = false;
              }
            })
            if(oke === true){
              retval.push(value);
            }
        });
        this.dataSource = new MatTableDataSource(retval);
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
