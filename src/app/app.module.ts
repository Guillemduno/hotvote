import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EntityEventComponent } from './entity-event/entity-event.component';
import { HeaderComponent } from './header/header.component';
import { EntityEditEventComponent } from './entity-edit-event/entity-edit-event.component';
import { EntityInsertEventComponent } from './entity-insert-event/entity-insert-event.component';
import { EntitySignupComponent } from './entity-signup/entity-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserEventComponent } from './user-event/user-event.component';
import { UserVoteEventComponent } from './user-vote-event/user-vote-event.component';
import { UserResultsEventComponent } from './user-results-event/user-results-event.component';
import { EntityResultsRecordComponent } from './entity-results-record/entity-results-record.component';
import { EntityEditProfileComponent } from './entity-edit-profile/entity-edit-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StartPageComponent,
    EntityFormComponent,
    UserFormComponent,
    EntityEventComponent,
    HeaderComponent,
    EntityEditEventComponent,
    EntityInsertEventComponent,
    EntitySignupComponent,
    UserSignupComponent,
    UserEventComponent,
    UserVoteEventComponent,
    UserResultsEventComponent,
    EntityResultsRecordComponent,
    EntityEditProfileComponent,
    UserEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
