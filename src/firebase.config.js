/* eslint-disable */
import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

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
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
export {app,db};