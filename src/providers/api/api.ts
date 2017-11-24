import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  url:string = 'http://localhost:8000/api/1.0';// 'https://randomuser.me/api/?results=25';

  constructor(public http:HttpClient) {
    console.log('Hello ApiFraseProvider Provider');
  }

  get(endpoint:string, params?:any, reqOpts?:any) {
    console.log(params);
    /*if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }*/

  //  return  this.http.get(this.url );
    return this.http.get(this.url + '/' + params);
//    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }
}
