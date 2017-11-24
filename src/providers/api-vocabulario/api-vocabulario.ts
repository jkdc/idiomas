import { Injectable } from '@angular/core';
import { ApiProvider} from '../api/api';

/*
  Generated class for the ApiVocabularioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiVocabularioProvider {

  constructor(public api: ApiProvider) {
    console.log('Hello CategoriaProvider Provider');
  }

  query(params?: any) {
    return this.api.get('palabras/', params);
  }
}
