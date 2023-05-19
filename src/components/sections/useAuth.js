import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../utils/Firebase";
import { useToast } from "@chakra-ui/react";
import { useLoading } from "./useLoading";
import "firebase/compat/firestore";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loading, showLoader } = useLoading();
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const toast = useToast();
  const [authLoading, setAuthLoading] = useState(true);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user && user.emailVerified);
      setAuthLoading(false);

      // Update the email verification status here
      if (user) {
        setIsEmailVerified(user.emailVerified);
      } else {
        setIsEmailVerified(false);
      }
    }, (error) => {
      console.error(error);
      setAuthLoading(false);
    });

    console.log(`isLoggedIn updated: ${isLoggedIn}`);

    return unsubscribe;
  }, []);

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
  };

  const handleLogin = async (email, password) => {
    showLoader(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      if (user.emailVerified) {
        setIsLoggedIn(true);
        return true;
      } else {
        toast({
          title: "Email not verified.",
          description: "Please verify your email address before logging in.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        await handleLogout();
        showLoader(false);
        return false;
      }
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
      showLoader(false);
      return false;
    }
  }

  const handleRegister = async (email, password) => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await user.sendEmailVerification();
      if (user) {
        setIsLoggedIn(false); // Set the user to be logged out until they verify their email
        toast({
          title: "Registration successful.",
          description: "A verification email has been sent to your email address. Please verify your email to log in.",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
        return true;
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast({
          title: "An error occured.",
          description: "Email already in use.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (error.code === "auth/weak-password") {
        toast({
          title: "An error occured.",
          description: "Password is too short.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (error.code === "auth/invalid-email") {
        toast({
          title: "An error occured.",
          description: "Please enter a valid email.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      return false;
    }
  };

  const handleCompleteRegister = async (email,name, surname, country, gender, bgColor) => {
    // Get the current user's ID
    const { uid } = auth.currentUser;
    setIsLoggedIn(true);

    // Create a new user document in Firestore
    await firestore.collection('users').doc(uid).set({
      email,
      name,
      surname,
      country,
      gender,
      bgColor,
      progress: 0,
      registrationCompleted: true, // Add this field
    });
  };

  const isRegistrationCompleted = async () => {
    const user = firebase.auth().currentUser;
    if (!user) return false;

    const userDoc = await firebase.firestore().collection("users").doc(user.uid).get();
    const userData = userDoc.data();
    return userData.registrationCompleted || false;
  };

  const handlePasswordReset = async (email) => {
    try {
      console.log(email + "email ne geldi");
      await firebase.auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent successfully!');
      return true;
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        toast({
          title: "An error occured.",
          description: "Please enter a valid email.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return false;
      }
    }
  }

  const checkEmailVerified = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      return user.emailVerified;
    }
    return false;
  };

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
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return {
    isLoggedIn,
    isEmailVerified,
    handleLogin,
    handleLogout,
    isEmailTouched,
    isPasswordTouched,
    handleEmailBlur,
    handlePasswordBlur,
    handleRegister,
    handleCompleteRegister,
    setIsLoggedIn,
    handleProgress,
    handlePasswordReset,
    checkEmailVerified,
    authLoading,
  };
};
