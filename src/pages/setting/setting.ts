import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import {SettingProvider} from "../../providers/setting/setting";

@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {

    selectedTheme: String;

    willBeTheme : String = 'dark-theme';

    constructor(public navCtrl: NavController, public nativePageTrans: NativePageTransitions, private settingprovider: SettingProvider) {
        this.settingprovider.getActiveTheme().subscribe(val => {
            this.selectedTheme = val;
        })

        if ( this.selectedTheme =='dark-theme'){
            this.willBeTheme = 'white-theme'
        }else{
            this.willBeTheme = 'dark-theme'
        }


    }

    toggleAppTheme() {



        if (this.selectedTheme == 'dark-theme') {

            this.settingprovider.setActiveTheme('white-theme')
            this.willBeTheme= 'dark-theme'
        } else {

            this.settingprovider.setActiveTheme('dark-theme')
            this.willBeTheme= 'white-theme'
        }

    }




    slidePage() {

        let options: NativeTransitionOptions = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            iosdelay: 50
        }

        this.nativePageTrans.slide(options);
        this.navCtrl.push("SecondPage")

    }

    flipPage() {

        let options: NativeTransitionOptions = {
            direction: 'up',
            duration: 600

        }

        this.nativePageTrans.flip(options);
        this.navCtrl.push("SecondPage")


    }

    fadePage() {

        let options: NativeTransitionOptions = {
            direction: 'up',
            duration: 600

        }

        this.nativePageTrans.fade(null);
        this.navCtrl.push("SecondPage")
    }

}
