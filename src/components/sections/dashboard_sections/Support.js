import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { useToast } from '@chakra-ui/react';

const firestore = firebase.firestore();

const Support = () => {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [problem, setProblem] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add a new document in collection "tickets"
        await firestore.collection("tickets").add({
            email,
            title,
            problem,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        
        toast({
            title: "Success.",
            description: "Thank you for sharing your problem with us. We will get back to you ASAP!",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        // Clear the form fields
        setEmail('');
        setTitle('');
        setProblem('');
        setMessage('');
    }

    return (
        <Box width="100%" maxWidth="550px" margin="auto" p={6}>
            <Heading as="h1" size="xl" textAlign="center" mb={6}>Need Help?</Heading>
            <Heading as="h2" size="md" mb={6}>Feeling Stuck? Let's solve the problem together!</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired mb={4}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="title" isRequired mb={4}>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormControl>
                <FormControl id="problem" isRequired mb={4}>
                    <FormLabel>Problem</FormLabel>
                    <Input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} />
                </FormControl>
                <FormControl id="message" isRequired mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </FormControl>
                <Button colorScheme="blue" type="submit" width="full">Send</Button>
            </form>
        </Box>
    );
}

export default Support;