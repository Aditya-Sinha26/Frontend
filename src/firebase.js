import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCySqaN-TpRflCYHNzvXk63FDs4YxE7D9A",
  authDomain: "social-media-mern-a00d2.firebaseapp.com",
  projectId: "social-media-mern-a00d2",
  storageBucket: "social-media-mern-a00d2.appspot.com",
  messagingSenderId: "335685720277",
  appId: "1:335685720277:web:5c35982378c5d03c716a5c",
  measurementId: "G-BQL7E52YCR"
};

  firebase.initializeApp(firebaseConfig)

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  export default firebase;