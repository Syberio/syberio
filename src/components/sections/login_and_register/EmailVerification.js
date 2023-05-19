import React from 'react';
import { Box, Button, Heading, Text, VStack, Flex } from '@chakra-ui/react';
import { useAuth } from '../useAuth';

const EmailVerification = ({ handleEmailVerification }) => {
    const auth = useAuth();

    const handleResendVerificationEmail = async () => {
        try {
            await auth.currentUser.sendEmailVerification();
            console.log('Verification email sent successfully!');
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    };

    return (
        <Flex align={'center'} direction='column' background={'#fafafa'} height={"100vh"} >
            <Box>
                <VStack spacing={4} align="center" m={4}>
                    <Heading as="h1" size="lg">Verify Your Email</Heading>
                    <Text>
                        Before accessing the app, please verify your email address. Check your inbox for a verification email.
                    </Text>
                    <Button colorScheme="blue" onClick={handleResendVerificationEmail}>
                        Resend Verification Email
                    </Button>
                    <Button onClick={handleEmailVerification}>Verify Email</Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default EmailVerification;
