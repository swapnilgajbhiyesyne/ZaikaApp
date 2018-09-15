import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ItemlistComponent} from '../components/itemlist/itemlist';
import {AutoCompletePipe} from '../pipes/autocomplete'
import {ItemfilterPipe} from '../pipes/itemfilter/itemfilter'
import {AdditemPage} from '../pages/additem/additem'
import {CreateorderComponent} from '../components/createorder/createorder'
import {OrdersgraphComponent} from '../components/ordersgraph/ordersgraph'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemlistComponent,AutoCompletePipe,ItemfilterPipe,
    AdditemPage,
    CreateorderComponent,
    OrdersgraphComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemlistComponent,
    AdditemPage,
    CreateorderComponent,
    OrdersgraphComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
