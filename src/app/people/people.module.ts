import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleDetailComponent } from './people-detail.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    PeopleComponent,
    PeopleDetailComponent,
  ]
})
export class PeopleModule { }
