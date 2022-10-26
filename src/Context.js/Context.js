import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext();

const Context = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //#  Google Login :
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //#  Github Login :
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  //# Login With Email & Password :
  const loginWithEmailAndPassword = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //# Register New User With Email & Password :
  const registerWithEmailAndPassword = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //# Update User Profile :
  const updateDisplayNameAndPhotUrl = (fullName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  //# Send Verification Email Address :
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //# Send Password Reset Email :
  const passwordReset = (userEmail) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, userEmail);
  };

  //# Sign Out :
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //# Authentication State Observer :
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unSub();
  }, []);

  //# Auth Information :
  const authInfo = {
    user,
    loader,
    googleLogin,
    githubLogin,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    updateDisplayNameAndPhotUrl,
    verifyEmail,
    passwordReset,
    userSignOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
