import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private baseUrl = "https://localhost:44381/api/Auth/"
    constructor(private http: HttpClient) {}

    register(body:any)
    {
        return this.http.post(this.baseUrl + "Register", body);
    }

    login(body:any)
    {
        return this.http.post(this.baseUrl + "Login", body);
    }

    editProfile(body:any, curPass:string)
    {
        var currentPassword: string = curPass;
        console.log({body, currentPassword});
        return this.http.post(this.baseUrl + "EditProfile", {body, currentPassword});
    }

    getProfile(){
        return this.http.get(this.baseUrl + "GetProfile");
    }
}
