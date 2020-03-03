import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService implements CanActivate{

  canActivate(): boolean | Promise<boolean> | Observable<boolean>{
    const rnd = Math.round(Math.random() * 10);
    console.log("RANDOM NUMBER : ", rnd);
    if(rnd > 4){
      return true;
    }
    return false;
  }

  constructor() { }
}
