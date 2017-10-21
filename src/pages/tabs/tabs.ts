import {Component} from '@angular/core';

import {ReceipePage} from '../receipe/receipe';
import {FavoritePage} from '../favorite/favorite';
import {SettingPage} from '../setting/setting';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {


    tab2Root = ReceipePage;
    tab3Root = FavoritePage;
    tab1Root = SettingPage;

    constructor() {

    }
}
