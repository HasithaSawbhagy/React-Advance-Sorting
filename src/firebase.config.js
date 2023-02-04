import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAFf1onQAB6yKO5NEIfBHJ9XPO0BOtpmso",
  authDomain: "remotecoders-2140a.firebaseapp.com",
  projectId: "remotecoders-2140a",
  storageBucket: "remotecoders-2140a.appspot.com",
  messagingSenderId: "894126657098",
  appId: "1:894126657098:web:77ab7cf91e409fc64d20b3",
  measurementId: "G-XWFYE5BRX7"


}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export{ db }