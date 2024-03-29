import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  // writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAm5nb1FxQ5S1TyiutoHxCVHu7ySnamVWo',
  authDomain: 'crwn-clothing-db-2814e.firebaseapp.com',
  projectId: 'crwn-clothing-db-2814e',
  storageBucket: 'crwn-clothing-db-2814e.appspot.com',
  messagingSenderId: '584583415210',
  appId: '1:584583415210:web:03328ca9fead4575ded7d3',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // there are lots of other providers
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);
export const db = getFirestore();

// export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey); // get the collection
//   const batch = writeBatch(db); // get a batch ref

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object); // att batch set call
//   });

//   await batch.commit(); // all or nothing transaction
//   console.log('done');
// };

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return null;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error creating user', error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return null;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return null;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

// observers changes in authentication
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
