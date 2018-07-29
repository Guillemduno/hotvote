import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {map} from 'rxjs/operators';  /*How to use:  .pipe(map(res => res.json())) */
import {Observable} from 'rxjs';
/*import {GLOBAL} from "./global";*/

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;
  constructor(private _http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'Hola Mundo desde el servicio';
  }

  getArticulos() {
    return this._http.get(this.url).pipe(map(res => res.json()));
  }
}
