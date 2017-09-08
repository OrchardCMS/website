import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Article } from './models/article';

@Injectable()
export class ArticleSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Article[]> {
      console.log('searched:' + term);
      return this.http.get(`https://api.myjson.com/bins/4iaco?name=${term}`).map((r: Response) => r.json() as Article[]);
  }
}