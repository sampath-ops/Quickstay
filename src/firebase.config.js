/* eslint-disable */
// import  firebase from "firebase/compat/app";
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
import { enableIndexedDbPersistence } from "firebase/firestore"; 
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSGID,
  appId: process.env.REACT_APP_APPID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC3b7DbbQX__GT-hXc8oQGviwzFik-dYJs",
//   authDomain: "quickstay-2bd39.firebaseapp.com",
//   databaseURL: "https://quickstay-2bd39-default-rtdb.firebaseio.com",
//   projectId: "quickstay-2bd39",
//   storageBucket: "quickstay-2bd39.appspot.com",
//   messagingSenderId: "109548127913",
//   appId: "1:109548127913:web:ef4435e3ba864cc40d8bb8"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore();
const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

// ENABLE OFFLINE PERSISTANCE
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully

export {app,db};