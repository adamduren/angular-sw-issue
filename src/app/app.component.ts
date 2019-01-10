import * as firebase from 'firebase/app';

// Comment this out and the issue goes away
import 'firebase/auth';

import { Component, ApplicationRef } from '@angular/core';
import { interval, from, merge, timer } from 'rxjs';
import { map, mergeMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isStable$ = this.applicationRef.isStable;
  public swIsEnabled$ = merge(timer(0), interval(1000)).pipe(
    startWith(null),
    mergeMap(() => from(navigator.serviceWorker.getRegistrations())),
    map(registrations => !!registrations.length),
  );

  constructor(private applicationRef: ApplicationRef) {
    firebase.initializeApp({
      apiKey: 'AIzaSyBq65EbK5pf7k2S460IrRwNV5RQHaCDTWM',
      authDomain: 'fir-project-1afd2.firebaseapp.com',
      databaseURL: 'https://fir-project-1afd2.firebaseio.com',
      projectId: 'fir-project-1afd2',
      storageBucket: 'fir-project-1afd2.appspot.com',
      messagingSenderId: '541470677558',
    });
  }
}
