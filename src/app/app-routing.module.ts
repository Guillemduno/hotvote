import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent} from './start-page/start-page.component';

import { EntityFormComponent } from './entity-form/entity-form.component';
import { EntitySignupComponent } from './entity-signup/entity-signup.component';
import { EntityEventComponent } from './entity-event/entity-event.component';
import { EntityEditEventComponent } from './entity-edit-event/entity-edit-event.component';
import { EntityInsertEventComponent } from './entity-insert-event/entity-insert-event.component';
import { EntityResultsRecordComponent } from './entity-results-record/entity-results-record.component';
import { EntityEditProfileComponent } from './entity-edit-profile/entity-edit-profile.component';


import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEventComponent } from './user-event/user-event.component';
import { UserVoteEventComponent } from './user-vote-event/user-vote-event.component';
import { UserResultsEventComponent } from './user-results-event/user-results-event.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';



const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'startPage', component: StartPageComponent},

  {path: 'entitySignUp', component: EntitySignupComponent},
  {path: 'entityForm', component: EntityFormComponent},
  {path: 'entityEvent', component: EntityEventComponent},
  {path: 'entityEditEvent', component: EntityEditEventComponent},
  {path: 'entityInsertEvent', component: EntityInsertEventComponent},
  {path: 'entityResultsRecord', component: EntityResultsRecordComponent},
  {path: 'entityEditProfile', component: EntityEditProfileComponent},
  
  {path: 'userSignUp', component: UserSignupComponent},
  {path: 'userForm', component: UserFormComponent},
  {path: 'userEvent', component: UserEventComponent},
  {path: 'userVoteEvent', component: UserVoteEventComponent},
  {path: 'userResultsEvent', component: UserResultsEventComponent},
  {path: 'userEditProfile', component: UserEditProfileComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)],

})



export class AppRoutingModule { }
