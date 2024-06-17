import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo9tWzrYhorGOySj_fNGH8gxtbLT5X9Ks",
  authDomain: "netflixgpt-ec8c6.firebaseapp.com",
  projectId: "netflixgpt-ec8c6",
  storageBucket: "netflixgpt-ec8c6.appspot.com",
  messagingSenderId: "603074194007",
  appId: "1:603074194007:web:046deafb0d1457fb65d112",
  measurementId: "G-TQZZCC3TDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export the auth default because it will require us everywhere in app
export const auth = getAuth(app);