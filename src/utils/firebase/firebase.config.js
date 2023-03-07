import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from 'firebase/auth';

import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

const firebase = {
  apiKey: 'AIzaSyCKjmRS0Qd92jAbcshxNKdc1h1nz0vGpYU',
  authDomain: 'crwn-clothing-db-67afb.firebaseapp.com',
  projectId: 'crwn-clothing-db-67afb',
  storageBucket: 'crwn-clothing-db-67afb.appspot.com',
  messagingSenderId: '902652024777',
  appId: '1:902652024777:web:3a90d0c27b10fbaf7a3a18',
};

const firebaseApp = initializeApp(firebase);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (user) => {
  const userDocRef = doc(db, 'user', user.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // sudo code
  // first check if user data exist
  // if it is than simply return userDocRef
  // if not than simply create / set the
  //  document with the data from userauth in
  // collection

  // if doesnt exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user ', { error });
    }
  }
  // if exist
  return userDocRef;
};
