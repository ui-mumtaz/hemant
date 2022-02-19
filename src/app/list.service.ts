import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';

interface SearchResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  constructor(private _http: HttpClient) { }
  
  getUser(){
    return this._http.get(`${environment.apiUrl}/users`)
  }

  getDistrict(){
    return this._http.get(`${environment.apiUrl}/district`)
  }

  getVillage(){
    return this._http.get(`${environment.apiUrl}/village`)
  }
  
  getCity(){
    return this._http.get(`${environment.apiUrl}/citizen`)
  }

  search(term: string) {
    return this._http.get(`${environment.apiUrl}/village`)
  }
  
  // search(term: string) {
  //   return this._http.get<SearchResponse>('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         format: 'json',
  //         list: 'search',
  //         utf8: '1',
  //         srsearch: term,
  //         origin: '*'
  //       }
  //     })
  //     .pipe(pluck('query', 'search'));
  // }
}
