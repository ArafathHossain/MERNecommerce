import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwOAqQMimUzD6vPjzdLP9GpNi6adqXhYw",
    authDomain: "ecommerce-react2020.firebaseapp.com",
    projectId: "ecommerce-react2020",
    storageBucket: "ecommerce-react2020.appspot.com",
    messagingSenderId: "421985790917",
    appId: "1:421985790917:web:327da9d7727f19c17179ac"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
