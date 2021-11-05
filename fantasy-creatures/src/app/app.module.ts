import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatureDetailsComponent } from './Creature/creature-details.component';
import { CreatureListComponent } from './Creature/creature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatureListComponent,
    CreatureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
