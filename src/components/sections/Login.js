import React, { useState } from "react";
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
  Link,
  FormErrorMessage,
} from '@chakra-ui/react'
import Logo from "../ui/Logo";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../utils/Firebase";
import { useAuth } from "./useAuth";

firebase.initializeApp(firebaseConfig);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';

  const { isPasswordTouched, isEmailTouched,handleEmailBlur,handlePasswordBlur } = useAuth();
  const { isLoggedIn, handleLogin, handleLogout } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };
  return (
    
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

      <Text>
        {isLoggedIn ? (
          'You are logged in!'
        ) : (
          'You are not logged in'
        )}
      </Text>
      <Stack spacing="8">
        <Stack spacing="6" align={'center'}>

          <Link href='/syberio'>
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
              <Link href={"register"}>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </Link>

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
              <FormControl isInvalid={!isPasswordValid && isPasswordTouched}>
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
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="blue" onClick={handleSubmit}>Sign in</Button>
              <Button colorScheme="blue" onClick={handleLogout}>log off</Button>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    
  );  
}

