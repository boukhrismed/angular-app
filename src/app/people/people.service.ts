import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) { }

  getPeople(
    pageNumber: number,
    pageSize: number,
    searchText: string
  ): Observable<any> {
    let url =
      'http://swapi.dev/api/people/?page=' + pageNumber + '&limit=' + pageSize;
    if (searchText) {
      url = url + '&search=' + searchText;
    }
    return this.http.get<any>(url);
  }

  getPersonByUrl(url: string) {
    return this.http.get<any>(url);
  }
}
