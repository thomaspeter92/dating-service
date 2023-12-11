import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBQffvOFjHcu7KLv-QIEt7ucRaLt6mGoS0",
  authDomain: "msc-project-7e88b.firebaseapp.com",
  projectId: "msc-project-7e88b",
  storageBucket: "msc-project-7e88b.appspot.com",
  messagingSenderId: "55806778480",
  appId: "1:55806778480:web:d5713c07024ba430f4a8b5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signIn = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const getUserToken = async (): Promise<string | undefined> => {
  const user = auth.currentUser
  return await user?.getIdToken()
}