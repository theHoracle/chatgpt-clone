// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASWSiA9T-2FHMQ8FbIG81xqQEkmQ1TbkQ",
  authDomain: "chatgpt-messenger-cln.firebaseapp.com",
  projectId: "chatgpt-messenger-cln",
  storageBucket: "chatgpt-messenger-cln.appspot.com",
  messagingSenderId: "820872222986",
  appId: "1:820872222986:web:66a2bb78da2309099782f3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app); 

export { db };