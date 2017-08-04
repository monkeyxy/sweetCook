import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { apis } from '../../environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CookbookService {
  constructor(
      public http: HttpService,
  ) {}

  cookbookList(params){
    let url = `${apis.cookList()}`;
    return this.http.get(url + '?page=' + params.page + "&num=" + params.num);
  }
}
