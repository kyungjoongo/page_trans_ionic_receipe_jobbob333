import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ReceipePage} from '../pages/receipe/receipe';
import {FavoritePage} from '../pages/favorite/favorite';
import {SettingPage} from '../pages/setting/setting';
import {TabsPage} from '../pages/tabs/tabs';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import {SettingProvider} from '../providers/setting/setting';
import {HttpModule} from "@angular/http";
import {HttpProvider} from '../providers/http/http';
import {SearchModalPage} from "../pages/search-modal/search-modal";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
    declarations: [
        MyApp,
        ReceipePage,
        FavoritePage,
        SettingPage,
        TabsPage,
        SearchModalPage

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ReceipePage,
        FavoritePage,
        SettingPage,
        TabsPage,
        SearchModalPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        NativePageTransitions,
        SettingProvider,
        HttpProvider,
        InAppBrowser

    ]
})
export class AppModule {
}
