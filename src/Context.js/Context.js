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
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext();

const Context = ({ children }) => {
  const [error, setError] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //#  Google Login :
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //#  Github Login :
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //# Login With Email & Password :
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //# Register New User With Email & Password :
  const registerWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //# Authentication State Observer :
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      const userId = user.uid;
      console.log(userId);
    });
    return () => unSub();
  }, []);

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

  //# Auth Information :
  const authInfo = {
    error,
    googleLogin,
    githubLogin,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    updateDisplayNameAndPhotUrl,
    verifyEmail,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
