import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebase";

export const firebaseGoogleLogin = async (idToken: string) => {
  const credential = GoogleAuthProvider.credential(idToken);

  return await signInWithCredential(auth, credential);
};

//project-302849965285