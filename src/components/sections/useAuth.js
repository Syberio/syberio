import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../utils/Firebase";

firebase.initializeApp(firebaseConfig);

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
  };

  const handleLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return { isLoggedIn, handleLogin, handleLogout,isEmailTouched,isPasswordTouched,handleEmailBlur,handlePasswordBlur };
};
