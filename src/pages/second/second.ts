import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import {SettingPage} from "../setting/setting";

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativePageTrans: NativePageTransitions) {
  }


  homePage = SettingPage


  goBack() {

    if (this.navCtrl.canGoBack()) {

      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600,
        slidePixels : 20

      }

      this.nativePageTrans.slide(options);
      this.navCtrl.pop();

    } else {

      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600,
        slidePixels : 20

      }
      this.nativePageTrans.slide(options);
      this.navCtrl.setRoot("HomePage")

    }
  }
}
