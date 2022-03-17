import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import { SafetyDocs } from 'src/app/SafetyDocs/safety-docs';
import { Device } from 'src/app/models/device.model';
import { SafetyDocsHistory } from 'src/app/SafetyDocs/safety-docs-history';
import { SafetyDocsMultimedia } from 'src/app/SafetyDocs/safety-docs-multimedia';
import { SafetyDocsBasicInfo } from 'src/app/SafetyDocs/safety-docs-basic-info';
import { SafetyDocsChecklist } from 'src/app/SafetyDocs/safety-docs-checklist';

@Injectable({
    providedIn: 'root'
  })

export class SafetyDocument{
    private glavnaForma = new BehaviorSubject<FormGroup>( new FormGroup({
        basicInfo: new FormControl(null,[Validators.required]),
        history: new FormControl(),
        multimedia: new FormControl(),
        equipment:new FormControl(null,[Validators.required]),
        checklist: new FormControl(null,[Validators.required]),
      }));
    
      glavnaFormaIzmjena = this.glavnaForma.asObservable()
    
      docs$: BehaviorSubject<SafetyDocs[]>;
      docs:Array<SafetyDocs>=[];
      idVal="-1";
    
      constructor() {
        this.mockedDocs();
        this.docs$ = new BehaviorSubject(this.docs);
      }
    
      getAll() {
        this.docs$.next(this.docs);
      }
    
      GetSafetyDocForEditing(id: string){
        
        var retWorkPlan =  this.docs.find(item=> item.id === id);
        if(retWorkPlan !== undefined){
          this.idVal = id;
        }
        else {
          this.idVal = "-1";
        }
        return retWorkPlan;
      }
    
      ResetGlavnaForma(){
        this.glavnaForma = new BehaviorSubject<FormGroup>( new FormGroup({
          basicInfo: new FormControl(null,[Validators.required]),
          history: new FormControl(),
          multimedia: new FormControl(),
          equipment :new FormControl(null,[Validators.required]),
          checklist: new FormControl(null,[Validators.required]),
        }));
    
        this.idVal= "-1";
        this.glavnaFormaIzmjena = this.glavnaForma.asObservable();
        
      }
    
      AddNewOrAddEdited(){
        var wp:SafetyDocs;
        var index = undefined;
        if(this.idVal=== "-1"){
    
          wp = new SafetyDocs((this.docs.length + 1).toString(),this.glavnaForma.value.controls.basicInfo.value,this.glavnaForma.value.controls.equipment.value);
          wp.historyState.push(new SafetyDocsHistory((this.docs.length + 1).toString(), this.GetRealDateAndTime(new Date()), "Pera Peric", "Draft"));
        }
        else {
    
          wp = new SafetyDocs(this.idVal.toString(),this.glavnaForma.value.controls.basicInfo.value,this.glavnaForma.value.controls.equipment.value);
          index = this.docs.findIndex(item=> item.id === this.idVal.toString() );
          wp.historyState = this.glavnaForma.value.controls.history.value;
          
          wp.basicInfo.status = this.glavnaForma.value.controls.history.value[0].status.toString();
          console.log(index);
        }
        console.log(index);
        
        wp.multimedia = this.glavnaForma.value.controls.multimedia.value;
        wp.checklist = this.glavnaForma.value.controls.checklist.value;
        
        
    
        this.Add(wp,index);
        
      }
    
      Add(doc:SafetyDocs,index: number | undefined){
        console.log(index);
        console.log("length of podaci: "+ this.docs.length)
        if(index === undefined || index === -1){
          console.log("dodavanje novog");
          this.docs.push(doc);
        }
        else {
          console.log("izmjena")
          this.docs.splice(index,1,doc);
        }
    
    
        this.docs$.next(this.docs);
    
        console.log("Poslije Dodavanja/Izmene")
        console.log("length of podaci: "+ this.docs.length)
        console.log(this.docs); 
    
    
      }
    
      EditForm(novaForma:FormGroup, editFromHistory = false){
        console.log("sta je sad tu stiglo");
        console.log(novaForma);
        this.glavnaForma.next(novaForma);
        if(editFromHistory)
          this.AddNewOrAddEdited();
        
      }
      // add(doc: SafetyDocs) {
      //   const idVal=this.docs.sort((a,b) => b.id-a.id)[0];
      //   const newEl = new SafetyDocs(idVal.id+1, doc.startDate, doc.phoneNum, doc.status, doc.address);
      //   this.docs.push(newEl);
      //   this.docs$.next(this.docs);
      // }
    
      loadDocs(){
        return this.docs;
      }
    
      mockedDocs() {
    
        var device1 = new Device();
        var device2 = new Device();
        var device3 = new Device();
    
        var multimedia1 = new SafetyDocsMultimedia("C:\Users\Luka\Desktop\fakultet\PUSGS\PUSGS-Projekat\PUSGSProjekat\src\assets\slika1.jpg");
        var multimedia2 = new SafetyDocsMultimedia("C:\Users\Luka\Desktop\fakultet\PUSGS\PUSGS-Projekat\PUSGSProjekat\src\assets\slika2.jpg");
        var multimedia3 = new SafetyDocsMultimedia("C:\Users\Luka\Desktop\fakultet\PUSGS\PUSGS-Projekat\PUSGSProjekat\src\assets\slika3.jpg");
            
        var izmjena1 = new SafetyDocsHistory("1234","2021-05-01 00:16","Zika Zikic", "Issued");
        var izmjena2 = new SafetyDocsHistory("1234","2021-04-29 00:16","Zika Zikic", "Issued");
        var izmjena3 = new SafetyDocsHistory("1234","2021-05-01 23:16","Zika Zikic", "Draft");
        var izmjena4 = new SafetyDocsHistory("1234","2021-04-29 00:16","Mika Mikic", "Issued");
        var izmjena5 = new SafetyDocsHistory("1234","2021-04-24 00:16","Jovan Jovic", "Draft");
    
        var checkList1=new SafetyDocsChecklist(true, true, true, true);
        var checkList2=new SafetyDocsChecklist(true, false, true, false);
    
        var basicInfo1:SafetyDocsBasicInfo = { type:"Planned Work", workPlan:"WP1",crew:"CRW1",status:"Approved", 
        currentDate:this.GetRealDateAndTime(new Date()), user:"Pera Peric",phone:"+38165111111",notes:"Note 1", details:"Details 1"}
    
        var basicInfo2:SafetyDocsBasicInfo = { type:"Unplanned Work", workPlan:"WP2",crew:"CRW2",status:"Draft", 
        currentDate:this.GetRealDateAndTime(new Date()), user:"Pera Peric",phone:"+38165111111",notes:"Note 2", details:"Details 2"}
    
        var basicInfo3:SafetyDocsBasicInfo = { type:"Unplanned Work", workPlan:"WP3",crew:"CRW3",status:"Draft", 
        currentDate:this.GetRealDateAndTime(new Date()), user:"Pera Peric",phone:"+38165111111",notes:"Note 3", details:"Details 3"}
    
        var basicInfo4:SafetyDocsBasicInfo = { type:"Planned Work", workPlan:"WP1",crew:"CRW1",status:"Approved", 
        currentDate:this.GetRealDateAndTime(new Date()), user:"Pera Peric",phone:"+38165111111",notes:"Note 4", details:"Details 4"}
    
        var basicInfo5:SafetyDocsBasicInfo = { type:"Unplanned Work", workPlan:"WP2",crew:"CRW1",status:"Draft", 
          currentDate:this.GetRealDateAndTime(new Date()), user:"Pera Peric",phone:"+38165333333",notes:"Note 5", details:"Details 5"}
    
        var basicInfo6:SafetyDocsBasicInfo = { type:"Unplanned Work", workPlan:"WP2",crew:"CRW2",status:"Draft", 
          currentDate:this.GetRealDateAndTime(new Date()), user:"Pera Peric",phone:"+38165222222",notes:"Note 6", details:"Details 6"}
    
          this.docs = [
            {id:"1",basicInfo:basicInfo1, equipment:device1, multimedia: [multimedia1,multimedia2] , historyState:[izmjena1,izmjena5], checklist:checkList2},
          
            {id:"2",basicInfo:basicInfo2, equipment:device1, multimedia: [multimedia2,multimedia3] , historyState:[izmjena2,izmjena3,izmjena1], checklist:checkList1 },
          
            {id:"3",basicInfo:basicInfo3, equipment:device2, multimedia: [multimedia3,multimedia2] , historyState:[izmjena1,izmjena3,izmjena2,izmjena3,izmjena4],checklist:checkList1},
          
            {id:"4",basicInfo:basicInfo4, equipment:device3, multimedia: [multimedia1,multimedia1] , historyState:[izmjena5,izmjena4], checklist:checkList1 },
          
            {id:"5",basicInfo:basicInfo5, equipment:device2, multimedia: [multimedia1,multimedia3] , historyState:[izmjena2,izmjena1],checklist:checkList1},
          
            {id:"6",basicInfo:basicInfo6, equipment:device3, multimedia: [multimedia1,multimedia3] , historyState:[izmjena1,izmjena3], checklist:checkList1 }
    
          ]
      }
    
      GetRealDateAndTime(date:Date){
        var hours = date.getHours() + 2;
        date.setHours(hours)
        return date.toISOString().substring(0,16);
      }
}