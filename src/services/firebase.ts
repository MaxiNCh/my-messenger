import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setUser } from '../store/user/actionCreators';

const firebaseConfig = {
  apiKey: "AIzaSyCKA0GOhi_fmMk81vVkVmlGB_n3DVlTWhI",
  authDomain: "gb-messenger-7918d.firebaseapp.com",
  projectId: "gb-messenger-7918d",
  storageBucket: "gb-messenger-7918d.appspot.com",
  messagingSenderId: "230065683165",
  appId: "1:230065683165:web:674b07b1dd4b4c76023934"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const logIn = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email, pass);
}

export const signUp = async (email: string, pass: string) => {
  return await createUserWithEmailAndPassword(auth, email, pass);
}

export const logOut = async () => {
  return await signOut(auth);
}

