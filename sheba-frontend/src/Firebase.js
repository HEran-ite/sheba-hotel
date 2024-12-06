// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBbodlLWD89Cl7iRbaUm4AUsa5EjpdExXs",
//   authDomain: "sheba-12488.firebaseapp.com",
//   projectId: "sheba-12488",
//   storageBucket: "sheba-12488.appspot.com", // Corrected storage bucket
//   messagingSenderId: "651588756767",
//   appId: "1:651588756767:web:0cf4ef26275f8748963c2a",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbodlLWD89Cl7iRbaUm4AUsa5EjpdExXs",
  authDomain: "sheba-12488.firebaseapp.com",
  projectId: "sheba-12488",
  storageBucket: "sheba-12488.firebasestorage.app",
  messagingSenderId: "651588756767",
  appId: "1:651588756767:web:0cf4ef26275f8748963c2a",
  measurementId: "G-Q8NSGXT6MD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };