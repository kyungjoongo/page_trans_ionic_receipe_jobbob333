import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingProvider {

    private theme: BehaviorSubject<String>

    constructor(public http: Http) {
        this.theme = new BehaviorSubject("light-theme");

    }

    setActiveTheme(val) {

        this.theme.next(val);

    }

    getActiveTheme() {

        return this.theme.asObservable();

    }

}
