import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  myParam: string = '';
  currentPerson: any;
  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.myParam = params['url'];
      console.log('parm', this.myParam);
      this.peopleService.getPersonByUrl(this.myParam).subscribe(res => {
        this.currentPerson = res;
      });
    });
  }

}
