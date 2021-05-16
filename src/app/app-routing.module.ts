import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from './people/people-detail.component';
import { PeopleComponent } from './people/people.component';


const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'people-detail/:url', component: PeopleDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
