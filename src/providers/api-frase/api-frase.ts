import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";

/*
  Generated class for the ApiFraseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiFraseProvider {

  constructor(public api: ApiProvider) {
    console.log('Hello CategoriaProvider Provider');
  }

  query(params?: any) {
    return this.api.get('frases/', params);
  }

}
