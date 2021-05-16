import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPeople } from '../shared/models/people';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleList: any;
  filter: string = '';
  collectionSize = 10;
  page = 1;
  pageSize = 10;
  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.doSearch(1, 6)
  }

  doSearch(pageNumber: number, pageSize: number): void {
    var data = this.getPeople(pageNumber, pageSize);
    data.subscribe(res => {
      this.peopleList = res.results;
      this.collectionSize = res.count;
      console.log(res);
    });
  }

  getPeople(pageNumber: number, pageSize: number): Observable<any> {
    console.log(this.filter);
    return this.peopleService.getPeople(pageNumber, pageSize, this.filter);
  }

  search(): void {
    this.doSearch(this.page, this.pageSize);
  }

  details(url: string): void {
    this.router.navigate(['people-detail', url]);
  }
}
