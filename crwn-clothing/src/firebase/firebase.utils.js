import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA2pia8Jai-Z-SAbYqDAaKEzuKfkw6tTGg',
  authDomain: 'crwn-db-6e552.firebaseapp.com',
  projectId: 'crwn-db-6e552',
  storageBucket: 'crwn-db-6e552.appspot.com',
  messagingSenderId: '90020111890',
  appId: '1:90020111890:web:11555a7bc07c5720585acb',
  measurementId: 'G-NVD63QDYE4',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(firestore.doc(`users/${userAuth.uid}`));
  // console.log(snapShot);

  // user정보가 없다면 새로 만든다
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
    } catch (error) {
      console.log('error createing user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
