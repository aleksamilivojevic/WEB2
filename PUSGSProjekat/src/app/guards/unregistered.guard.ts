import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()

export class UnregisteredGuard implements CanActivate{
    constructor(private router:Router){}
    canActivate(){
        if(!localStorage.token){
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}