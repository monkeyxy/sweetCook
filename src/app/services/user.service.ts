import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { apis } from '../../environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(
      public http: HttpService,
  ) {}
  register(params){
    let url = `${apis.register()}`;
    return this.http.post(url,{
        body:params,
    })
  }

}