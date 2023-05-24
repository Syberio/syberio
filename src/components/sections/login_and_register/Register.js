import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  FormErrorMessage,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import Logo from "../../ui/Logo";
import "firebase/compat/auth";
import firebase from 'firebase/compat/app';
import { firebaseConfig } from "../../../utils/Firebase";
import { useAuth } from "../useAuth";
import { Link } from "react-router-dom";
import 'firebase/compat/auth';
import { useNavigate } from "react-router-dom";
import CompleteRegistrationPage from "../../../pages/CompleteRegistrationPage";
import { useLocation } from "react-router-dom";
import EmailVerificationPage from "../../../pages/EmailVerificationPage";
import EmailVerification from "./EmailVerification";
import { useToast } from "@chakra-ui/react";
import CompleteRegistration from "./CompleteRegistration";


const firestore = firebase.firestore();

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const toast = useToast();
  const {
    handleRegister,
    isPasswordTouched,
    isEmailTouched,
    handleEmailBlur,
    handlePasswordBlur,
    currentUser,
    handleLogout,
    auth,
  } = useAuth(navigate);
  const query = useQuery();
  const showVerification = query.get("showVerification");
  const [loadingUserData, setLoadingUserData] = useState(true);

  const [activetab, setActiveTab] = useState(showVerification === "true" ? "Email Verification" : "Register")
  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';
  const [preUid, setUid] = useState('');
  const [isAuthStatusConfirmed, setIsAuthStatusConfirmed] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);


  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setIsAuthStatusConfirmed(true); // This will run once the auth status is confirmed
      if (!user) {
        setLoadingUserData(false);  // Whether there's a user or not, set loading to false here
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUid(currentUser.uid);
      firestore.collection("users")
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            console.log(doc.data());
            if ((!userData.hasOwnProperty('registrationCompleted') || userData.registrationCompleted === false) && location.pathname === "/register/complete-register") {
              setActiveTab("Complete-Register");
              navigate("/register/complete-register");
              handleLogout();
            }
            else if (userData.isVerified === false) {
              setLoadingUserData(false);
              return;
            }
            else if (showVerification === "true" && isAuthStatusConfirmed) {
              setActiveTab("Email Verification");
            }
            else if (!isRegistering && location.pathname !== "/register") {
              navigate('/');
            }
          }
        })
        .catch((error) => {
          console.log("Error getting user document:", error);
        });
    }
  }, [showVerification, location.pathname, currentUser, isAuthStatusConfirmed, isRegistering]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isCheckboxChecked) {
      try {
        setIsRegistering(true);
        const success = await handleRegister(email, password);
        if (success) {
          setActiveTab("Email Verification");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsRegistering(false);
      }
    }
    else {
      toast({
        title: "An error occured.",
        description: "You have to agree to the Terms of Service and Privacy Policy.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }
  const handleEmailVerification = async () => {
    const user = firebase.auth().currentUser;
    try {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          firebase.firestore().collection("users").doc(user.uid).update({
            isVerified: true,
          });
          setActiveTab("Complete-Register");
          navigate("/register/complete-register");
        } else {
          toast({
            title: "Email not verified.",
            description: "Looks like you haven't verified your email (yet).",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loadingUserData ? (
        <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}>
          <Spinner thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl' />
        </Flex>
      ) : (
        <>
          {activetab === "Register" && (
            <Container
              activetab={activetab}
              maxW="lg"
              height={"100vh"}
              py={{
                base: '14',
                md: '28',
              }}
              px={{
                base: '0',
                sm: '8',
              }}
            >
              <Stack spacing="8">
                <Stack spacing="6" align={'center'}>
                  <Link to="/">
                    <Logo />
                  </Link>
                  <Stack
                    spacing={{
                      base: '2',
                      md: '3',
                    }}
                    textAlign="center"
                  >
                    <Heading
                      size={{
                        base: 'xs',
                        md: 'sm',
                      }}
                    >
                      Create an account
                    </Heading>
                  </Stack>
                </Stack>
                <Box
                  py={{
                    base: '0',
                    sm: '8',
                  }}
                  px={{
                    base: '4',
                    sm: '10',
                  }}
                  bg={{
                    base: 'transparent',
                    sm: 'bg-surface',
                  }}
                  boxShadow={{
                    base: 'none',
                    sm: 'md',
                  }}
                  borderRadius={{
                    base: 'none',
                    sm: 'xl',
                  }}
                >
                  <Stack spacing="6">
                    <FormControl isRequired isInvalid={!isEmailValid && isEmailTouched}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={handleEmailBlur}
                      />
                      {isEmailValid || !isEmailTouched ? null : <FormErrorMessage>Please enter a valid email</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired isInvalid={!isPasswordValid && isPasswordTouched}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        id="password"
                        name="password"
                        type={'password'}
                        autoComplete="current-password"
                        placeholder='**********'
                        onChange={(event) => setPassword(event.target.value)}
                        onBlur={handlePasswordBlur}
                      />
                      {isPasswordValid || !isPasswordTouched ? null : <FormErrorMessage>Please enter a valid password</FormErrorMessage>}
                    </FormControl>
                  </Stack>
                  <Checkbox isChecked={isCheckboxChecked} onChange={handleCheckboxChange}>
                    I agree to the{' '}
                    <Button variant="link" colorScheme="blue" size="sm" onClick={() => navigate("/terms")}>
                      Terms of Service
                    </Button>
                    {' '}and the{' '}
                    <Button variant="link" colorScheme="blue" size="sm" onClick={() => navigate("/privacy")}>
                      Privacy Policy{' '}
                    </Button>
                  </Checkbox>
                  <Box boxSize={6}></Box>
                  <Stack spacing="6">
                    <Button colorScheme="blue" onClick={handleSubmit}>Create Account</Button>
                  </Stack>
                </Box>
                <HStack justify="center">
                  <Text color="muted">Already have an account?</Text>
                  <Button variant="link" colorScheme="blue" onClick={() => navigate("/login")}>
                    Sign in
                  </Button>
                </HStack>
              </Stack>
            </Container>
          )}
          {activetab === "Email Verification" && (
            <EmailVerification handleEmailVerification={handleEmailVerification} />
          )}
          {activetab === "Complete-Register" && <CompleteRegistration email={email} preUid={preUid} password={password} />}
        </>
      )}
    </>

  );
}

