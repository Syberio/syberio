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


firebase.initializeApp(firebaseConfig);

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const toast = useToast();

  const {
    handleRegister,
    isPasswordTouched,
    isEmailTouched,
    handleEmailBlur,
    handlePasswordBlur,
    isLoggedIn,
  } = useAuth(navigate);
  const query = useQuery();
  const showVerification = query.get("showVerification");

  const [activetab, setActiveTab] = useState(showVerification === "true" ? "Email Verification" : "Register")
  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    if (showVerification === "true") {
      setActiveTab("Email Verification");
    }
  }, [showVerification]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await handleRegister(email, password);
      console.log(isLoggedIn + " register içi burası");
      if (success) {
        setActiveTab("Email Verification");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleEmailVerification = async () => {
    const user = firebase.auth().currentUser;
    try {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          console.log(isLoggedIn + " verification içi burası");

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
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to the home page or any other page you'd like
    }
  }, [isLoggedIn, navigate]);

  return (
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
              <Checkbox>
                I agree to the{' '}
                <Button variant="link" colorScheme="blue" size="sm">
                  Terms of Service
                </Button>
                {' '}and the{' '}
                <Button variant="link" colorScheme="blue" size="sm">
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
              <Button variant="link" colorScheme="blue">
                Sign in
              </Button>
            </HStack>
          </Stack>
        </Container>
      )}
      {activetab === "Email Verification" && (
        <EmailVerification handleEmailVerification={handleEmailVerification} />
      )}
      {activetab === "Complete-Register" && <CompleteRegistration email={email}/>}


    </>
  );
}

