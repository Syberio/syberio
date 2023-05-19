import { useState } from "react";
import {
    Box,
    Heading,
    Input,
    Button,
    useToast,
    Stack,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Link,
    Text,
    FormErrorMessage,
} from "@chakra-ui/react";
import "firebase/auth";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const toast = useToast();
    const isEmailValid = email.trim() !== '';
    const { handlePasswordReset, isEmailTouched, handleEmailBlur } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await handlePasswordReset(email);
        if (success) {
            toast({
                title: 'Success!.',
                description: "A password reset link has sent to your email and should be arrived shortly.",
                status: 'success',
                duration: 6000,
                isClosable: true,
            })
            setTimeout(() => {
                navigate("/login", { replace: true });
            }, 3000);
        }
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
                            Forgot password?
                        </Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Suddenly remembered your password?</Text>

                            <Button variant="link" colorScheme="blue" onClick={() => {
                                navigate("/login");
                            }}>
                                Log in
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
                            <FormControl isInvalid={!isEmailValid && isEmailTouched}>
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
                        </Stack>
                        <Stack spacing="6">
                            <Button colorScheme="blue" onClick={handleSubmit}>Send Password Reset</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default ForgotPassword;
