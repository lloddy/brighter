import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWqpfOpd_B-K-3DKz5pzUckWrEDrUfzh4",
    authDomain: "brighter-2aeef.firebaseapp.com",
    projectId: "brighter-2aeef",
    storageBucket: "brighter-2aeef.appspot.com",
    messagingSenderId: "495683278290",
    appId: "1:495683278290:web:000faaf0c4d0b1b089240b",
    measurementId: "G-F86TYK61TD"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;