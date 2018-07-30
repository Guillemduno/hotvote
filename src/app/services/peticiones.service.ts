import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {map} from 'rxjs/operators';  /*How to use:  .pipe(map(res => res.json())) */
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;
  constructor(private _http: Http) {
    /*this.url = 'https://jsonplaceholder.typicode.com/posts';*/
    this.url = '../assets/posts.json';
    
  }

  getArticulos() {
    return this._http.get(this.url).pipe(map(res => res.json()));
  }


}
