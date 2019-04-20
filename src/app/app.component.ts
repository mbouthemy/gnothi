import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnothi';

  // Initialize Firebase
  constructor() {
    const config = {
      apiKey: "AIzaSyCltw98az9ydn0aVngNMNVVAKZEHSdDM9s",
      authDomain: "gnothi-30f59.firebaseapp.com",
      databaseURL: "https://gnothi-30f59.firebaseio.com",
      projectId: "gnothi-30f59",
      storageBucket: "gnothi-30f59.appspot.com",
      messagingSenderId: "76859783078"
    };
    firebase.initializeApp(config);
  }
}
