import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { addDoc, collection, query, where } from "firebase/firestore";
import { User } from "../common/model";

export const handleSignIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(
    auth,
    email.toLowerCase(),
    password.toLowerCase()
  );
};

export const handleSignOut = async () => {
  return await signOut(auth);
};

export const handleCreateUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(
    auth,
    email.toLowerCase(),
    password.toLowerCase()
  );
};

export const getUser = (email: string) => {
  return query(collection(db, "users"), where("email", "==", email));
};

export const createUser = async (body: User) => {
  return await addDoc(collection(db, "users"), body);
};

export const getAllFruits = () => {
  return query(collection(db, "fruits"));
};
