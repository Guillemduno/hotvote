import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css'],
  providers: [PeticionesService]
})
export class UserEventComponent implements OnInit {
  public articulos;
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    /*console.log(this._peticionesService.getPrueba());*/
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
          if (!this.articulos) {
              console.log('Error en el servidor');
          }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

}
