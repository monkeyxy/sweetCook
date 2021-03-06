import {Injectable, ErrorHandler} from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';
import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
export enum HttpCodeEnum { E401, E400, E500, S200 }
@Injectable()
export class HttpService {
  public observerLogin: Observer<any>;
  constructor(
    public _http: Http,
    public errHandle: ErrorHandler,
    public router:Router
    ) {}
  request(url: string, opts: Object) {
    return new Observable(observer => {
      this._http.request(url, new RequestOptions(opts)).map(res => res.json()).catch(err => {
        return Observable.throw(err);
      }).subscribe(res => {
        /**
         * 统一对err_code进行判断处理
         * @param  {boolean} !res.err_code 正常返回,处理数据
         * @param  {boolean} res.err_code === -1 鉴权失败
         * @param  {boolean} res.err_code === -2 参数错误
         * @param  {boolean} res.err_code === -3 内部错误（undefined）
         * @param  {boolean} res.err_code === -4 权限不足
         * @param  {boolean} res.err_code === -5 账户在其他处登录
         * @param  {boolean} else 给用户错误提示
         */
        if (!res.err_code) {
          observer.next(res.data || res);
          observer.complete();
        } else if (opts['errs'] && opts['errs'][res.err_code]) { // 指定err_code的err
          if (opts['errs'][res.err_code] === 'ignore') {
            return;
          }
        } else if (res.err_code === -1 || res.err_code === -5) { // 未登录
        //   observer.error(HttpCodeEnum.E401, res);
        } else if (res.err_code === -2) {
        //   observer.error(HttpCodeEnum.E400, res);
        } else {
          //this.errHandle.handleError(res);
          observer.error(res);
          // observer.next(HttpCodeEnum.E500);
          // this._popupService.erKr({
          //   body: res.msg,
          // });
        }
      }, err => {
        observer.error(err);
        // this._popupService.alert('服务器出错啦！工程师哥哥正在紧急抢修！');
        // alert('服务器出错啦！工程师哥哥正在紧急抢修！');
      });
    });
  }
  get(url: string, opts?: Object , userId?: any) {
    let search = <URLSearchParams>(opts && opts['search']) || new URLSearchParams();
    return this.request(url, Object.assign({
      method: 'get',
      headers: userId?new Headers({userId: userId}):'',
      search: search
    }, opts));
  }
  post(url: string, opts: Object = {}) {
    return this.request(url, Object.assign({
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }, opts, {
      body: JSON.stringify(typeof opts['body'] === 'object' ? opts['body'] : {})
    }));
  }
  put(url: string, opts: Object = {}) {
    return this.request(url, Object.assign({
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }, opts, {
      body: JSON.stringify(typeof opts['body'] === 'object' ? opts['body'] : {})
    }));
  }
  delete(url: string, opts?: Object) {
    return this.request(url, Object.assign({
      method: 'delete'
    }, opts));
  }
}