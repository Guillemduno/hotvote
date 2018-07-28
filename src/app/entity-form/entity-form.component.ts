import { Component, OnInit } from '@angular/core';

import {ENTITY} from "../models/entity";

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent implements OnInit {
  public entity:ENTITY;
  constructor() { 
    this.entity = new ENTITY("","","");
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.entity);
  }

}
