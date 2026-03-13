import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZkwk3qXG3nBcXP1MZ_phskWyrggGccGI",
  authDomain: "fir-authentication-262fa.firebaseapp.com",
  projectId: "fir-authentication-262fa",
  storageBucket: "fir-authentication-262fa.appspot.com",
  messagingSenderId: "302849965285",
  appId: "1:302849965285:android:892c754a2290e9a64da80c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);