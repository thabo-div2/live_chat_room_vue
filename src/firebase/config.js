import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCjwWJcKzRA8HKdti-9Rt45qMg9_R41MIk",
	authDomain: "udemy-vue-firebase-sites-19cd3.firebaseapp.com",
	projectId: "udemy-vue-firebase-sites-19cd3",
	storageBucket: "udemy-vue-firebase-sites-19cd3.appspot.com",
	messagingSenderId: "916056343603",
	appId: "1:916056343603:web:9ca2be68574f8d45f48f46",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
