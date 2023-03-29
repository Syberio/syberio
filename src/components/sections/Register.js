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
} from '@chakra-ui/react';
import Logo from "../ui/Logo";
import { PasswordField } from "../sections/PasswordField";
import "firebase/compat/auth";
import firebase from 'firebase/compat/app';
import { firebaseConfig } from "../../utils/Firebase";
import { useAuth } from "./useAuth";

firebase.initializeApp(firebaseConfig);

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const { isPasswordTouched, isEmailTouched,handleEmailBlur,handlePasswordBlur } = useAuth();
  

  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }
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
                onBlur={handleEmailBlur} />
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
            <Button colorScheme="blue" onClick={handleRegister}>Create Account</Button>
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
  );
}

