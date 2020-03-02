import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn : "root"
})
export class DataService{

  constructor(private httpClient : HttpClient){}

  getUserData() : IUser[]{
    return USER_DATA;
  }

  getApiData(){

    return this.httpClient.get("assets/model/userdata.json")



    // this.httpClient.get("assets/model/userdata.json")
    //   .pipe(map(response => {
    //     return <IUser[]>response['userdata'];
    //   }))
    //   .subscribe(
    //     response => console.log("DATA SERVICE : ", response)
    //   )
  }
}
