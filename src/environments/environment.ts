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
  
  //WebEx
  uriGetCode: 'https://webexapis.com/v1/authorize?client_id=Ce070a17e97544e67bb329f030e4ff59426af5ea618a17a715f1bb13d5a7fd3a7&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2FwebEx&scope=spark%3Akms%20meeting%3Aschedules_write&state=set_state_here',
  uriAccessToken:'https://webexapis.com/v1/access_token',
  uriCreateMeeting:'https://webexapis.com/v1/meetings',
  uriMeetingInvitees:'https://webexapis.com/v1/meetingInvitees',
  redirect_uri:'http://localhost:4200/webEx',
  grant_type:'authorization_code',
  client_secret:'8b3799187636aaa9dd6a556c40b56e5f380f3914ebe5a0bb6111b002c0d3a370',
  client_id:'Ce070a17e97544e67bb329f030e4ff59426af5ea618a17a715f1bb13d5a7fd3a7',
  
  // EndPoints
  loginEndpoint: '/api/auth/login',
  logonEndpoint: '/api/auth/logon',
  subjectsEndpoint: '/api/subject',
  usersByRole:'/api/user/roles',
  createMeeting: '/api/user/meetings',
  getMeetingsByUser:'/api/user/meeting',
  getOneMeet: '/api/meeting',
  editAMeet: '/api/user/meeting',
  deleteAmeet: '/api/meeting',
  getProfile: '/api/user/codigo',
  editProfile: '/api/user',
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
