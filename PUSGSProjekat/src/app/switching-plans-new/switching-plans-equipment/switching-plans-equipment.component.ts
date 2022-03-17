import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { Street } from 'src/app/models/street.model';
import { DeviceService } from 'src/app/services/device-service/device.service';
import { StreetService } from 'src/app/services/street-service/street.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'switching-plans-equipment',
  templateUrl: './switching-plans-equipment.component.html',
  styleUrls: ['./switching-plans-equipment.component.css']
})
export class SwitchingPlansEquipmentComponent implements OnInit {

  selectedType!:string;
    name!:string;
    streets!:Street[];
    selectedStreet!:string;
  
    constructor(private streetService:StreetService, private deviceService:DeviceService) { 
      streetService.getStreets().subscribe(
        (res:any)=>{
          this.streets = res;
        },
        err=>{
          console.log(err);
        }
      )
    }

  ngOnInit(): void {
  }

  onCauseChange($event:any){
    this.refreshName();
  }

  onSubmit(){
    var body:Device = new Device();
    body.name = this.name;
    body.street = this.selectedStreet;
    body.type = this.selectedType;
    this.deviceService.addDevice(body).subscribe(
      (res:any)=>{
        //toster pop up gj u did it
        this.refreshName();
      },
      err=>{
        console.log(err);
      }
    )
  }

  refreshName(){
    this.deviceService.getNextId(this.selectedType).subscribe(
      (res:any)=>{
        this.name = res.newId;
      },
      err=>{
        console.log(err);
      }
    )
  }

  team = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  workers = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
