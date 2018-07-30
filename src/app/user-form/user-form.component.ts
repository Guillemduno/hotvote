import { Component, OnInit } from '@angular/core';
import { UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {USER} from "../models/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  public user:USER;
  public users: Array<USER>;

  constructor(private _userService:UserService) { 
    this.user = new USER ("", "", "");
  }

  ngOnInit() {
  
  }

  onSubmit(){
      /*console.log(this._userService.addUser());
      this._userService.addUser(this.user).subscribe(
        user => {
          this.users.unshift(this.user);
        }
      )*/
      this._userService.addUser(this.user)

  }
}
