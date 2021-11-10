// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'proyectocea',
    appId: '1:17826992490:web:2a5b954a72ff490dc61513',
    storageBucket: 'proyectocea.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAAsBO_6-J0yooOHmKvhHWa8jQgJhbFSLs',
    authDomain: 'proyectocea.firebaseapp.com',
    messagingSenderId: '17826992490',
  },
  production: false,
  urlBack: 'http://localhost:3000',
  
  // EndPoints
  loginEndpoint: '/api/auth/login',
  logonEndpoint: '/api/auth/logon',
  subjectsEndpoint: '/api/subject',
  // logonEndpoint: '/api/subject',
  // logonEndpoint: '/api/auth/logon',
  // logonEndpoint: '/api/auth/logon',
  // logonEndpoint: '/api/auth/logon',
  // logonEndpoint: '/api/auth/logon',
  // logonEndpoint: '/api/auth/logon',
  // logonEndpoint: '/api/auth/logon',
  // logonEndpoint: '/api/auth/logon',

  firebaseConfig:{
    apiKey: "AIzaSyAAsBO_6-J0yooOHmKvhHWa8jQgJhbFSLs",
    authDomain: "proyectocea.firebaseapp.com",
    projectId: "proyectocea",
    storageBucket: "proyectocea.appspot.com",
    messagingSenderId: "17826992490",
    appId: "1:17826992490:web:2a5b954a72ff490dc61513"
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
