import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent} from "./start-page/start-page.component";
import { EntityFormComponent } from "./entity-form/entity-form.component";
import { UserFormComponent} from "./user-form/user-form.component";
import {EntityEventComponent} from "./entity-event/entity-event.component";

const routes: Routes =[
  {path: "", component: StartPageComponent},
  {path: "startPage", component: StartPageComponent},
  {path: "entityForm", component: EntityFormComponent},
  {path: "userForm", component: UserFormComponent},
  {path: "entityEvent", component: EntityEventComponent}
];


@NgModule({
  exports:[RouterModule],
  imports: [ RouterModule.forRoot(routes)],

})



export class AppRoutingModule { }
