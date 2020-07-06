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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
