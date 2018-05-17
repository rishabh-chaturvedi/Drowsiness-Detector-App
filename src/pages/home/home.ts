import { Firebase } from '@ionic-native/firebase';
// import { Htt                                                                                                                                                                                                                                                                                                                                                         pClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FcmProvider } from '../../providers/fcm/fcm';

import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
// import { Firebase}
// import { messaging } from 'firebase/app';
// import { FirebaseMessaging } from '@firebase/messaging-types';

@Component({                                                                                                                      
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  abc : any;

  constructor(public navCtrl: NavController, public fcm : FcmProvider, public toastCtrl : ToastController, public firebase : Firebase ){ 
    // this.fc
  }

  ionViewDidLoad(){
    console.log(this.fcm.getToken())
    
     this.fcm.getToken().then(data => {
      this.abc = data;
      console.log(data);
    });

    if(!this.firebase.hasPermission()){
      console.log("ABC");
    }
    this.firebase.grantPermission();
    this.firebase.getToken().then(data => {
      this.abc = data;
      console.log(data);
    });

    

    this.fcm.listenToNotification().pipe(
      tap(msg => {
        const toast = this.toastCtrl.create({
          message : msg.body,
          duration : 3000
        })
        toast.present();
      })
    ).subscribe()
  }

}
