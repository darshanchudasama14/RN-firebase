import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "./firebase";

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

/**
 * Logout User
 */
export const logoutFirebase = async () => {
  return await signOut(auth);
};


/**
 * Get Current Logged In User
 */
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};


/**
 * Auth State Listener (Auto Login)
 */
export const subscribeAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
