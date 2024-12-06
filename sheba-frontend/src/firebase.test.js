import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbodlLWD89Cl7iRbaUm4AUsa5EjpdExXs",
  authDomain: "sheba-12488.firebaseapp.com",
  projectId: "sheba-12488",
  storageBucket: "sheba-12488.appspot.com",
  messagingSenderId: "651588756767",
  appId: "1:651588756767:web:0cf4ef26275f8748963c2a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const testRegister = async () => {
  try {
    const email = "test1@example.com";
    const password = "password123";
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered successfully:", userCredential.user);
  } catch (error) {
    console.error("Firebase registration error:", error.message, error.code, error.stack);
  }
};

testRegister();
