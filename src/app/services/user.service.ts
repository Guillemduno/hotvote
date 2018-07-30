import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import { map } from "rxjs/operators";
import { Observable} from "rxjs";
import { HttpModule } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url_user;
  constructor(private _http:Http) { 
    this.url_user = "./assets/user.json";
  }

  addUser(user){
    console.log("User added");
    //return  this._http.post(this.url_user, user).pipe(map(res => res.json()));
    this._http.post(this.url_user, user).pipe(map(res => res.json()));
  }

}






