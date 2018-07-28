import { Component, OnInit } from '@angular/core';

import {ENTITY} from "../models/entity";

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent implements OnInit {
  public entity:ENTITY;
  public entities:Array<ENTITY>;
  constructor() { 
    this.entity = new ENTITY("","","");
    this.entities=[
      new ENTITY("Associació Ciclista","asso@gmail.com","1234"),
      new ENTITY("Associació Motos","asso@gmail.com","1234"),
    ];
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.entity);
    this.entities.push(this.entity);
    this.entity = new ENTITY("","","");
  }

}
