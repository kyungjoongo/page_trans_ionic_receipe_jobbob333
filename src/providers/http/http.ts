import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

    constructor(public http: Http) {
        console.log('Hello HttpProvider Provider');
    }

    getReceipe(searchTerm) {
        /*return this.http.get('http://35.194.150.240:8080/receipe/receipeListToJson').map(response => response.json())*/

        return this.http.get('http://kyungjoon.ipdisk.co.kr:3000/receipe/listToJson/'+ searchTerm).map(response => response.json())
    }

}
