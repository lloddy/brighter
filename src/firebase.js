import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    // apiKey: "AIzaSyBWqpfOpd_B-K-3DKz5pzUckWrEDrUfzh4",
    // authDomain: "brighter-2aeef.firebaseapp.com",
    // projectId: "brighter-2aeef",
    // storageBucket: "brighter-2aeef.appspot.com",
    // messagingSenderId: "495683278290",
    // appId: "1:495683278290:web:000faaf0c4d0b1b089240b",
    // measurementId: "G-F86TYK61TD"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db