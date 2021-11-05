import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatureDetailsComponent } from './Creature/creature-details.component';
import { CreatureListComponent } from './Creature/creature-list.component';

const routes: Routes = [
    { path: 'creature-details', component: CreatureDetailsComponent},
    { path: 'creature-list', component: CreatureListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
