import {Component, Renderer, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ImageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-search-modal',
    templateUrl: 'search-modal.html',
})
export class SearchModalPage {

    @ViewChild('searchInput') searchInput ;

    imageUrl: String;
    searchTerm: String;

    constructor(public navCtrl: NavController, public renderer: Renderer
        , public navParams: NavParams, public viewCtrl: ViewController, private events: Events) {


        this.imageUrl = navParams.get('imageUrl');

        // alert(this.imageUrl)

        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);

        setTimeout(() => {
            this.searchInput.setFocus();
        },1500);

    }

    keyPress(event) {

        this.doSearch()
    }

    doSearch() {

        if ( this.searchTerm == undefined){
            this.searchTerm= '';
        }

        this.events.publish('getReceipeList', this.searchTerm);
        this.dismiss();

    }

    closeModal(){

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ImageModalPage');
    }

}
