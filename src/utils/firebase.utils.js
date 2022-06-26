// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider, 
  signInWithPopup, signInWithRedirect} from 'firebase/auth'
import { getFirestore, getDoc, setDoc, doc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8XrwmvEKzkC-hwsCUBQdPf0Vi1gzzWqU",
  authDomain: "crwn-clothing-reactjs-d78c7.firebaseapp.com",
  projectId: "crwn-clothing-reactjs-d78c7",
  storageBucket: "crwn-clothing-reactjs-d78c7.appspot.com",
  messagingSenderId: "931116277967",
  appId: "1:931116277967:web:8ba0d6492aaefaac4417ba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
export const db = getFirestore();

export const saveLoginInfo = async (userAuth) => {
  const userDocRef = doc(db,'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
 console.log(userSnapShot);
 console.log(userSnapShot.exists()); 
 if(!userSnapShot.exists()){
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt
    });

  } catch (error) {
    console.log('Error creating user', error.message);    
  }



 }
}

