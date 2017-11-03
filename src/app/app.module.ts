import { ModalCreditoPageModule } from '../pages/modal-credito/modal-credito.module';
import { ModalBdmgPageModule } from '../pages/modal-bdmg/modal-bdmg.module';
import { ModalBdmgPage } from '../pages/modal-bdmg/modal-bdmg';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BdmgProvider } from '../providers/bdmg/bdmg';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModalBdmgPageModule,
    ModalCreditoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalBdmgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BdmgProvider
  ]
})
export class AppModule {}
