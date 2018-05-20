import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'menshirts';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBVMr83pUmo9elkTfOZqkxtbIwXGPPC0vg',
      authDomain: 'ng-ecommerce-angular6.firebaseapp.com'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
