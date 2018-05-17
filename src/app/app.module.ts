// import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';
import { AngularFirestore } from 'angularfire2/firestore';

const firebase = {
  apiKey : "AIzaSyCyK8p5X5KC9pFim4GytpgXMMD2NRuDMi8",
  authDomain : "drowsinessdetection-36b42.firebaseapp.com",
  databaseURL : "https://drowsinessdetection-36b42.firebaseio.com",
  projectId : "drowsinessdetection-36b42",
  storageBucket : "drowsinessdetection-36b42.appspot.com",
  messagingSenderId : "64141615861"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestore,
    // Firebase
    // HttpClient
  ]
})
export class AppModule {}
