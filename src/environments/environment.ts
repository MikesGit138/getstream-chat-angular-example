// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'chat-exmple-get-stream',
    appId: '1:289855459055:web:df2851b5abf6a09a46951a',
    storageBucket: 'chat-exmple-get-stream.appspot.com',
    apiKey: 'AIzaSyCRI-AoPeYXdL-Qq1KnRQ3zx4ryEDQyZhQ',
    authDomain: 'chat-exmple-get-stream.firebaseapp.com',
    messagingSenderId: '289855459055',
  },
  production: true,
  apiUrl: 'https://us-central1-chat-exmple-get-stream.cloudfunctions.net',
  stream: {
    key: 'g37f5ewacmrg'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
