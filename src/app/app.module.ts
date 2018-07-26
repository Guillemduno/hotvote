import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EntityEventComponent } from './entity-event/entity-event.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StartPageComponent,
    EntityFormComponent,
    UserFormComponent,
    EntityEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
