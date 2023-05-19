import React, { useState, useEffect, useRef } from "react";
import { Box, Image, Flex, Container, Heading, IconButton, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, VStack, useColorModeValue, Spinner, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton, useDisclosure } from "@chakra-ui/react";

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { useToast } from "@chakra-ui/react";
import { useManagePGP } from "../useManagePGP";
import { FaArrowRight } from "react-icons/fa";
import { sendMessage, decryptPrivateKey, decryptMessage, getNameSurnameBgColor } from '../useMessaging';
import sleepingCat from "../../assets/sleeping-cat.png"



const firestore = firebase.firestore();
const auth = firebase.auth();


export default function Messaging() {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState([]);
    const toast = useToast();
    const { keyring } = useManagePGP();
    const [newChatEmail, setNewChatEmail] = useState('');
    const [chatDetails, setChatDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const cancelRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [passphrase, setPassphrase] = useState("");

    const handleNewChat = async (event) => {
        event.preventDefault();

        const usersRef = firestore.collection('users');
        const snapshot = await usersRef.where('email', '==', newChatEmail).get();

        if (!snapshot.empty) {
            const userInfo = await getNameSurnameBgColor(newChatEmail);
            if (userInfo) {
                setChatDetails(prevChatDetails => ({
                    ...prevChatDetails,
                    [newChatEmail]: userInfo,
                }));

                if (!chats.includes(newChatEmail)) {
                    setChats([...chats, newChatEmail]);
                }
                setSelectedChat(newChatEmail);
            } else {
                toast({
                    title: "User does not exist.",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                });
            }
            setNewChatEmail('');
        }
    }


    const handleSubmitMessage = async (event) => {
        event.preventDefault();
        const senderEmail = auth.currentUser.email;
        const recipientEmail = selectedChat;

        // Get the primary keyring.
        const primaryKeyring = keyring.find(kr => kr.isPrimary);

        // If there is no primary keyring, then there is no public key.
        const senderPublicKey = primaryKeyring ? primaryKeyring.publicKey : null;
        const encryptedPrivateKey = primaryKeyring ? primaryKeyring.privateKey : null;

        if (senderPublicKey) {
            sendMessage(senderEmail, recipientEmail, senderPublicKey, encryptedPrivateKey, messageText).then(() => {
                setMessageText("");
            });
        } else {
            console.log('Sender has no public key.');
        }
    }

    const fetchMessages = (sender, recipient, callback) => {
        const messagesRef = firestore.collection('messages');
        return messagesRef
            .where('sender', 'in', [sender, recipient])
            .where('recipient', 'in', [sender, recipient])
            .orderBy('timestamp')
            .onSnapshot(callback);
    };

    const fetchChats = async () => {
        const email = auth.currentUser.email;
        const sentSnapshot = await firestore.collection('messages').where('sender', '==', email).get();
        const receivedSnapshot = await firestore.collection('messages').where('recipient', '==', email).get();

        const chatSet = new Set();
        const newChatDetails = {};

        sentSnapshot.docs.forEach(doc => chatSet.add(doc.data().recipient));
        receivedSnapshot.docs.forEach(doc => chatSet.add(doc.data().sender));

        const promises = Array.from(chatSet).filter(chatEmail => chatEmail).map(chatEmail =>
            getNameSurnameBgColor(chatEmail).then(({ name, surname, bgColor }) => {
                newChatDetails[chatEmail] = { name, surname, bgColor };
            })
        );

        await Promise.all(promises);

        setChats(Array.from(chatSet));
        setChatDetails(newChatDetails);
    };
    useEffect(() => {
        onOpen();

        fetchChats();
    }, []);


    useEffect(() => {
        if (!selectedChat || !keyring || !keyring[0]) {
            setMessages([]);
            return;
        }

        const email = auth.currentUser.email;
        const encryptedPrivateKey = keyring.find(key => key.isPrimary).privateKey;
        const privateKey = decryptPrivateKey(encryptedPrivateKey, passphrase);
        setLoading(true);

        const unsubscribe = fetchMessages(email, selectedChat, async snapshot => {
            const newMessages = snapshot.docs.map(doc => {
                const messageData = doc.data();
                const timestamp = messageData.timestamp instanceof firebase.firestore.Timestamp
                    ? messageData.timestamp.toDate()
                    : null;
                return {
                    ...messageData,
                    timestamp: timestamp,
                    isSentByMe: messageData.sender === email,
                };
            });
    
            const decryptedMessages = await Promise.all(
                newMessages.map(async messageData => {
                    const decryptedMessage = await decryptMessage(privateKey, passphrase, messageData.message);
                    return {
                        ...messageData,
                        message: decryptedMessage,
                        id: messageData.id,
                    };
                })
            );
    
            setMessages(decryptedMessages);
            setLoading(false);
        });
    
        return () => unsubscribe();
    }, [selectedChat, keyring, passphrase]);

    useEffect(() => {
        const email = auth.currentUser.email;
        const messagesRef = firestore.collection('messages');

        const unsubscribe = messagesRef
            .where('recipient', '==', email)
            .onSnapshot(async snapshot => {
                snapshot.docChanges().forEach(async change => {
                    if (change.type === "added") {
                        const newChatEmail = change.doc.data().sender;
                        if (!chats.includes(newChatEmail)) {
                            const userInfo = await getNameSurnameBgColor(newChatEmail);
                            if (userInfo) {
                                setChatDetails(prevChatDetails => ({
                                    ...prevChatDetails,
                                    [newChatEmail]: userInfo,
                                }));
                                setChats(prevChats => [...prevChats, newChatEmail]);
                            }
                        }
                    }
                });
            });

        return () => unsubscribe();
    }, [chats]);


    const messageBoxRef = useRef(null);

    const scrollToBottom = () => {
        messageBoxRef.current?.scrollTo({ top: messageBoxRef.current.scrollHeight, behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);


    const handleSelectChat = async (chat) => {
        setSelectedChat(chat);
        setMessageText("");
    }
    return (
        <>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                {/* Chat list */}
                <Box
                    w={{ base: "full", md: "72", lg: "60" }}
                    bg={"white"}
                    color="black"
                    borderRightWidth={{ md: "1px" }}
                    borderRadius="20"
                    maxWidth="100%"
                    h={{ base: "40vh", md: "81vh" }}
                    alignItems={'center'}
                    overflowY={{ base: "scroll", md: "auto" }}
                >
                    <VStack width="100%" padding={4} spacing={4} overflowY="auto" >
                        <Heading size="md">My Chat</Heading>
                        <Divider></Divider>
                        {chats.map((chat, index) => (
                            <Box
                                key={chat}
                                width="100%" p={2} bg={chat === selectedChat ? "gray.200" : ""}
                                color={chat === selectedChat ? "black" : ""} borderRadius="md"
                                onClick={() => handleSelectChat(chat)}
                            >
                                <HStack>
                                    <Avatar name={chatDetails[chat]
                                        ? chatDetails[chat].name + " " + chatDetails[chat].surname
                                        : ""} bg={chatDetails[chat]
                                            ? chatDetails[chat].bgColor
                                            : ""} color={'white'}></Avatar>
                                    <Heading size="sm">
                                        {chatDetails[chat]
                                            ? chatDetails[chat].name + " " + chatDetails[chat].surname
                                            : "Loading..."}
                                    </Heading>
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </Box>
                <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow="hidden">
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                    Enter Your Primary Passphrase To Decrypt Messages
                                </AlertDialogHeader>
                                <AlertDialogCloseButton />
                                <AlertDialogBody>
                                    <Input
                                        type="password"
                                        value={passphrase}
                                        onChange={(e) => setPassphrase(e.target.value)}
                                        placeholder="Passphrase"
                                    />
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme="blue" onClick={onClose} ml={3}>
                                        Submit
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                    <HStack spacing={4}>
                        <Input placeholder="New chat email..." value={newChatEmail} onChange={(e) => setNewChatEmail(e.target.value)} />
                        <Button onClick={handleNewChat} colorScheme="blue">Start Chat</Button>
                    </HStack>

                    {/* Message view */}
                    {selectedChat ? (
                        <Box
                            w={{ base: "full", md: "full" }}
                            bg={"white"}
                            color="black"
                            borderRightWidth={{ md: "1px" }}
                            borderRadius="20"
                            overflow={'scroll'}
                            maxWidth="100%"
                            h={{ base: "60vh", md: "69vh" }}
                        >
                            <VStack flex="1" width="100%" padding={4} spacing={4} align="stretch" height={'100%'} maxWidth="100%">
                                <Heading size="md">Messaging with {selectedChat}</Heading>
                                <VStack flex="1" width="100%" bg="white" borderRadius="md" padding={4} spacing={4} overflowY="auto" align={loading ? "center" : "start"} ref={messageBoxRef}>
                                    {loading ? (
                                        <Spinner />
                                    ) : (
                                        messages.map((messageObj, index) => (
                                            <Box
                                                key={messageObj.id}
                                                p={4}
                                                bg={messageObj.isSentByMe ? "green.200" : "gray.200"}
                                                borderRadius="md"
                                                alignSelf={messageObj.isSentByMe ? "flex-end" : "flex-start"}
                                                maxWidth={{ base: "100%", md: "55%" }}
                                                overflowWrap="break-word"
                                                wordwrap="break-word"
                                                wordBreak={'break-all'}

                                            >
                                                <Text>{messageObj.message}</Text>
                                                <Text fontSize="sm" color="gray.500">
                                                    {messageObj.timestamp ? messageObj.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Loading...'}
                                                </Text>
                                            </Box>
                                        ))
                                    )}
                                </VStack>
                                <HStack spacing={4}>
                                    <Input
                                        placeholder="Type a message..."
                                        value={messageText}
                                        onChange={(e) => setMessageText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSubmitMessage(e);
                                            }
                                        }}
                                    />
                                    <Button onClick={handleSubmitMessage} colorScheme="blue"><FaArrowRight /></Button>
                                </HStack>
                            </VStack>
                        </Box>
                    ):<Flex justify="center" align="center" h="100%">
                    <VStack>
                        <Text fontSize={20} fontWeight="bold">
                            Select or start a new chat to message with people!
                        </Text>
                        <Image maxW={{ base: "100%", sm: "40%" }} src={sleepingCat} />
                    </VStack>
                </Flex>}
                </Box>
            </Stack>
        </>
    );
}