import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'app-entity-event',
  templateUrl: './entity-event.component.html',
  styleUrls: ['./entity-event.component.css'],
  providers: [PeticionesService]
})
export class EntityEventComponent implements OnInit {
  public articulos;
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    
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
