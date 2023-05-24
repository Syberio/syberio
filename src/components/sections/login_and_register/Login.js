/*TODO: Redirect to dashboard after logged in */
/*TODO: Fix every <Link> to navigate() */
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
} from '@chakra-ui/react'
import Logo from "../../ui/Logo";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../../utils/Firebase";
import { useAuth } from "../useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WaveBackground from "../../../utils/WaveBackground";

const firestore = firebase.firestore();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';
  const navigate = useNavigate();

  const { isPasswordTouched, isEmailTouched, handleEmailBlur, handlePasswordBlur, handleLogin, setIsLoggedIn, isLoggedIn } = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await handleLogin(email, password);
    setIsLoggedIn(success);
    if (success) {
      const userDoc = await firestore.collection('users').doc(firebase.auth().currentUser.uid).get();
      const userData = userDoc.data();

      // check if registrationCompleted field exists and is true
      if (userData && userData.registrationCompleted) {
        navigate("/");
      } else {
        navigate("/register/complete-register");
      }
    }
  };
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to the home page or any other page you'd like
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setShowPage(isLoggedIn !== undefined);
  }, [isLoggedIn]);

  return (
    <>
      {showPage ? (
        <Container
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
                  Log in to your account
                </Heading>
                <HStack spacing="1" justify="center">
                  <Text color="muted">Don't have an account?</Text>

                  <Button variant="link" colorScheme="blue" onClick={() => {
                    navigate("/register");
                  }}>
                    Sign up
                  </Button>


                </HStack>
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
                <Stack spacing="5">
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
                  <FormControl isInvalid={!isPasswordValid && isPasswordTouched}>
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
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="link" colorScheme="blue" size="sm" onClick={() => { navigate("/forgot-password") }}>
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button colorScheme="blue" onClick={handleSubmit}>Sign in</Button>
                </Stack>

              </Stack>
            </Box>
          </Stack>
        </Container>

      ) : < Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}>
        <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl' />
      </Flex >}
    </>

  );
}

