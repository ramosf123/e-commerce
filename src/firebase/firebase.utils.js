import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfhuDJLwAK8vCA6NViyxsAUGeBYfgG0Bo",
  authDomain: "e-commerce-8544b.firebaseapp.com",
  databaseURL: "https://e-commerce-8544b.firebaseio.com",
  projectId: "e-commerce-8544b",
  storageBucket: "e-commerce-8544b.appspot.com",
  messagingSenderId: "1035187612694",
  appId: "1:1035187612694:web:8c9e998b2de699a5481937",
  measurementId: "G-LCRJ7L6J0T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
