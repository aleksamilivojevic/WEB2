import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Crew } from "src/app/models/crew.model";

@Injectable({
    providedIn: 'root'
})

export class TeamService{
    private baseUrl = "https://localhost:44381/api/Crews/"
  constructor(private http:HttpClient) { }

  getCrews(){
    return this.http.get(this.baseUrl);
  }

  getFreeCrewmates(){
    return this.http.get(this.baseUrl + "GetFreeCrewmates");
  }

  getCrewmates(id:number){
    return this.http.get(this.baseUrl + "GetCrewmates" + id);
  }

  addCrew(body:Crew){
    return this.http.post(this.baseUrl,body);
  }
}
