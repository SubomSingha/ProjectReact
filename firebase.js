// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEUlrDhRD9kx6rTBp_B-mPwhjbz4mjUR4",
  authDomain: "tryagain-40c24.firebaseapp.com",
  projectId: "tryagain-40c24",
  storageBucket: "tryagain-40c24.appspot.com",
  messagingSenderId: "982145230547",
  appId: "1:982145230547:web:1c71133317a10a49515626"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };