import {Component} from '@angular/core';
import {LoadingController, ModalController, NavController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";

import * as $ from 'jquery'
import {SearchModalPage} from "../search-modal/search-modal";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Events} from 'ionic-angular';

@Component({
    selector: 'page-receipe',
    templateUrl: 'receipe.html'
})
export class ReceipePage {

    galleryType = "instagram";

    existPhoto: boolean = true;
    receipeList: any = [];
    searchTerm: String = '';

    constructor(public navCtrl: NavController
        , private httpService: HttpProvider
        , public modalCtrl: ModalController
        , public events: Events
        , public loadingCtrl: LoadingController
        , public iab: InAppBrowser) {



        this.getReceipeList('');

        //리스너...
        events.subscribe('getReceipeList', (term) => {

            this.getReceipeList(term);
        });


    }

    getReceipeList(searchTerm) {
        const loading = this.loadingCtrl.create({
            content: `Loading....`,
            duration: 5000

        });
        this.searchTerm = searchTerm;

        loading.present();
        this.httpService.getReceipe(searchTerm).subscribe(res => {
            console.log(res);
            this.receipeList = res;

            loading.dismissAll();
        })

    }


    doRefresh(refresher) {
        console.log('Begin async operation', refresher);


        setTimeout(() => {
            console.log('Async operation has ended');

            this.httpService.getReceipe(this.searchTerm).subscribe(res => {

                this.receipeList = res;

            })

            refresher.complete();
        }, 800);


    }

    openModal() {
        let myModal = this.modalCtrl.create(SearchModalPage);
        myModal.present();
    }

    openWebview(url) {

        if (!url.match('http://')) {

            alert('주소가 잘못 됐습니다.')
            return false;
        }


        if ((<any>window).cordova) {
            const browser = this.iab.create(url);
        } else {

            window.open(url, '_system');
        }


    }


}
