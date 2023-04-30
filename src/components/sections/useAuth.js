import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../utils/Firebase";
import { useToast } from "@chakra-ui/react";
import "firebase/compat/firestore";


firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [loading, setLoading] = useState(true);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isLoggedIn');
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setLoading(false);
      localStorage.setItem('isLoggedIn', JSON.stringify(!!user));
    }, (error) => {
      console.error(error);
      setLoading(false);
    });
    setIsLoggedIn(JSON.parse(storedAuthStatus) ?? !!firebase.auth().currentUser);
    setLoading(false);
    return unsubscribe;
  }, []);

  /*useEffect(() => {
    // Check local storage for isRegistered status
    const storedRegisterStatus = localStorage.getItem('isRegistered');
    if (storedRegisterStatus) {
      setIsRegistered(true);
    }
  }, []);
  */

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
      localStorage.setItem("isLoggedIn", true);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast({
          title: 'An error occured.',
          description: "User e-mail or password is incorrect.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      else if (error.code === 'auth/invalid-email') {
        toast({
          title: 'An error occured.',
          description: "Please enter a valid e-mail.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      else if (error.code === 'auth/wrong-password') {
        toast({
          title: 'An error occured.',
          description: "User e-mail or password is incorrect.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
  }


  const handleRegister = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setIsRegistered(true);
      await handleLogin(email, password);
      //localStorage.setItem('isRegistered', true); // add this line
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast({
          title: 'An error occured.',
          description: "Email already in use.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else if (error.code === 'auth/weak-password') {
        toast({
          title: 'An error occured.',
          description: "Password is too short.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      //console.error(error);
    }
  }


  const handleCompleteRegister = async (name, surname, country, gender, bgColor) => {
    // Get the current user's ID
    const { uid } = auth.currentUser;
    setIsRegistered(false);
    setIsLoggedIn(true)
    // Create a new user document in Firestore
    await firestore.collection('users').doc(uid).set({
      name,
      surname,
      country,
      gender,
      bgColor,
    });

    toast({
      title: 'Success!.',
      description: "Welcome to Syberio, Enjoy!",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    localStorage.removeItem('isRegistered');
  }

  const handleProgress = async (progress) => {
    // Get the current user's ID
    const { uid } = auth.currentUser;

    // Update the user document in Firestore with the new progress value
    await firestore.collection('users').doc(uid).set({
      progress,
    }, { merge: true });
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setIsLoggedIn(false);
      // Remove authentication status from local storage
      localStorage.removeItem('isLoggedIn');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return { isLoggedIn, handleLogin, handleLogout, isEmailTouched, isPasswordTouched, handleEmailBlur, handlePasswordBlur, handleRegister, isRegistered, handleCompleteRegister, setIsLoggedIn, setLoading, setIsRegistered, handleProgress,loading};
};
