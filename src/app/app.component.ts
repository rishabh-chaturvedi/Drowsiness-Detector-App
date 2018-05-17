import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar,public fcm : FcmProvider, splashScreen: SplashScreen, public toastCtrl : ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();

       // Get a FCM token
       fcm.getToken()

       // Listen to incoming messages
       fcm.listenToNotification().pipe(
         tap(msg => {
           // show a toast
           const toast = toastCtrl.create({
             message: msg.body,
             duration: 3000
           });
           toast.present();
         })
       )
       .subscribe()
     
 
     });
  }
}

