import { Component, OnInit } from '@angular/core';

import { POSTS } from '../models/posts';
import {PeticionesService} from "../services/peticiones.service";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PeticionesService]
})
export class PostsComponent implements OnInit {
  public titulo:string;
  public posts;

  constructor(private _peticonesService: PeticionesService){ 
    this.titulo = "List of posts";
  }

  ngOnInit() {
    this._peticonesService.getArticulos().subscribe(
      result => {
        this.posts = result;
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

}
