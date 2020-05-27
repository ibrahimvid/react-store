import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAz4NdUEDqe_j9RXJ4RDlZNt-Gqin65v0o",
    authDomain: "react-store-b05f6.firebaseapp.com",
    databaseURL: "https://react-store-b05f6.firebaseio.com",
    projectId: "react-store-b05f6",
    storageBucket: "react-store-b05f6.appspot.com",
    messagingSenderId: "119235666237",
    appId: "1:119235666237:web:2275d2e8a188f458fae554",
    measurementId: "G-3CJR2GL3PS"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;