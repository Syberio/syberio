import React, { useState, useEffect, useRef } from "react";
import { Box, Image, Switch, Flex, Heading, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, VStack, useColorModeValue, Spinner, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, } from "@chakra-ui/react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { useToast } from "@chakra-ui/react";
import { useManagePGP } from "../useManagePGP";
import { FaArrowRight } from "react-icons/fa";
import { sendMessage, decryptPrivateKey, decryptMessage, getNameSurnameBgColor } from '../useMessaging';
import sleepingCat from "../../assets/sleeping-cat.png"
import { InfoOutlineIcon } from '@chakra-ui/icons';


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
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();

    const [passphrase, setPassphrase] = useState("");
    const [unreadChats, setUnreadChats] = useState([]);
    const [chatSet, setChatSet] = useState(new Set());
    const [lastVisibleMessage, setLastVisibleMessage] = useState(null);
    //const [isPGPAuthConf, setPGPAuthConf] = useState(false);


    const handleNewChat = async (event) => {
        event.preventDefault();

        if (newChatEmail === auth.currentUser.email) {
            toast({
                title: 'An error occured.',
                description: "You cannot start a chat with yourself.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            return;
        }

        const usersRef = firestore.collection('users');
        const snapshot = await usersRef.where('email', '==', newChatEmail).get();

        if (!snapshot.empty) {
            const userInfo = await getNameSurnameBgColor(newChatEmail);
            if (userInfo) {
                setChatDetails(prevChatDetails => ({
                    ...prevChatDetails,
                    [newChatEmail]: userInfo,
                }));

                if (!chatSet.has(newChatEmail)) {
                    setChatSet(prevChatSet => new Set(prevChatSet).add(newChatEmail));
                }
                setSelectedChat(newChatEmail);

                // Add the new chat to 'chats' as well
                setChats(prevChats => [...prevChats, newChatEmail]);
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

    const fetchMessages = (sender, recipient, callback, lastVisible) => {
        const messagesRef = firestore.collection('messages');
        let query = messagesRef
            .where('sender', 'in', [sender, recipient])
            .where('recipient', 'in', [sender, recipient])
            .orderBy('timestamp')

        // If there's a lastVisible document (after the first fetch), start from there
        if (lastVisible) {
            query = query.startAfter(lastVisible);
        }

        return query.onSnapshot(snapshot => {
            callback(snapshot);

            // Update last visible document
            const lastVisible = snapshot.docs[snapshot.docs.length - 1];
            setLastVisibleMessage(lastVisible);


        });
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
        onAlertOpen();
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

            // Group messages by date.
            const messagesByDate = newMessages.reduce((groups, message) => {
                const date = message.timestamp.toISOString().split('T')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(message);
                return groups;
            }, {});

            // Mark the first message of each day to display a date divider.
            const messagesWithDividers = [];
            for (let date in messagesByDate) {
                messagesByDate[date][0].showDateDivider = true;
                messagesWithDividers.push(...messagesByDate[date]);
            }

            const decryptedMessages = await Promise.all(
                messagesWithDividers.map(async messageData => {
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
            .where('read', '==', false)
            .onSnapshot(snapshot => {
                const unreadMessageGroups = snapshot.docs.reduce((groups, doc) => {
                    const senderEmail = doc.data().sender;
                    if (!groups[senderEmail]) {
                        groups[senderEmail] = 1;  // First unread message from this sender
                    } else {
                        groups[senderEmail]++;  // Subsequent unread messages from this sender
                    }
                    return groups;
                }, {});

                setUnreadChats(unreadMessageGroups);
            });

        return () => unsubscribe();
    }, []);



    const messageBoxRef = useRef(null);

    const scrollToBottom = () => {
        messageBoxRef.current?.scrollTo({ top: messageBoxRef.current.scrollHeight, behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);


    const handleSelectChat = async (chat) => {
        const email = auth.currentUser.email;
        const messagesRef = firestore.collection('messages');
        const snapshot = await messagesRef
            .where('sender', '==', chat)
            .where('recipient', '==', email)
            .where('read', '==', false)
            .get();

        const batch = firestore.batch();
        snapshot.docs.forEach(doc => {
            batch.update(doc.ref, { read: true });
        });
        await batch.commit();

        // Set unread count for this chat to 0
        setUnreadChats(prevUnreadChats => ({
            ...prevUnreadChats,
            [chat]: 0,
        }));

        setSelectedChat(chat);
        setMessageText("");
    };
    function DateDivider({ date }) {
        return (
            <HStack my="8" spacing="auto" alignItems="center" width="100%">
                <Divider flex="1" borderColor="gray.500" />
                <Text fontSize="sm" color="gray.500">
                    {date.toLocaleDateString('en-GB')}
                </Text>
                <Divider flex="1" borderColor="gray.500" />
            </HStack>
        );
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
                    <VStack width="100%" padding={4} spacing={4} overflowY="auto">
                        <Heading size="md">My Chat</Heading>
                        <Divider></Divider>
                        {chats.map((chat, index) => (
                            <Box
                                key={chat}
                                width="100%"
                                p={2}
                                bg={chat === selectedChat ? 'gray.200' : ''}
                                color={chat === selectedChat ? 'black' : ''}
                                borderRadius="md"
                                onClick={() => handleSelectChat(chat)}

                            >
                                <HStack>
                                    <Avatar
                                        name={
                                            chatDetails[chat]
                                                ? chatDetails[chat].name + ' ' + chatDetails[chat].surname
                                                : ''
                                        }
                                        bg={chatDetails[chat] ? chatDetails[chat].bgColor : ''}
                                        color="white"
                                    />
                                    <Heading size="sm" isTruncated>
                                        {chatDetails[chat]
                                            ? `${chatDetails[chat].name} ${chatDetails[chat].surname}`
                                            : 'Loading...'}
                                    </Heading>
                                    <Box
                                        marginLeft="auto"
                                        display={unreadChats[chat] ? 'flex' : 'none'}
                                        justifyContent="center"
                                        alignItems="center"
                                        flexShrink={0}
                                        width="24px"
                                        height="24px"
                                        borderRadius="30%"
                                        backgroundColor="blue.300"
                                        color="white"
                                        fontSize="15px"
                                        fontWeight="bold"
                                    >
                                        {unreadChats[chat] ? `${unreadChats[chat]}` : ''}
                                    </Box>
                                </HStack>

                            </Box>
                        ))}
                    </VStack>
                </Box >
                <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow="hidden">
                    <Modal isOpen={isModalOpen} onClose={onModalClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Messaging Info</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p>
                                    - The purpose of this messaging system is to provide a secure means of communication, ensuring your messages remain confidential and authenticated while teaching you the PGP concepts.
                                </p>
                                <br />
                                <p>
                                    - It utilizes Pretty Good Privacy (PGP) which combines data compression, symmetric-key cryptography, and public-key cryptography to provide security services for data communication. It can be used to encrypt messages, sign them, and provide an additional layer of security.
                                </p>
                                <br />

                                <p>
                                    - The message you send is encrypted with the recipient's public key and can only be decrypted by the recipient's private key. This ensures the confidentiality of your messages.
                                </p>
                                <br />

                                <p>
                                    - Your messages are signed with your private key and can be verified by anyone with your public key, providing message authentication and integrity.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={onModalClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <AlertDialog
                        isOpen={isAlertOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onAlertClose}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                    Enter Your Primary Passphrase To Decrypt Messages
                                </AlertDialogHeader>
                                <AlertDialogCloseButton />
                                <AlertDialogBody>
                                    <Input
                                        type='password'
                                        value={passphrase}
                                        onChange={(e) => setPassphrase(e.target.value)}
                                        placeholder='Passphrase'
                                    />
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onAlertClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme="blue" onClick={onAlertClose} ml={3}>
                                        Submit
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                    <HStack spacing={4}>
                        <Input type="text" placeholder='New chat email...' value={newChatEmail} onChange={(e) => setNewChatEmail(e.target.value)} />
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
                                        <Flex justify="center" align="center" h="100%">
                                            <Spinner size="xl" />
                                        </Flex>
                                    ) : (
                                        messages.map((messageObj, index) => (
                                            <React.Fragment key={messageObj.id}>
                                                {messageObj.showDateDivider && <DateDivider date={messageObj.timestamp} />}
                                                <Box
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
                                            </React.Fragment>

                                        ))
                                    )}
                                </VStack>
                                <HStack spacing={4}>
                                    <Button colorScheme="blue" onClick={onModalOpen}>
                                        <InfoOutlineIcon />
                                    </Button>
                                    <Input
                                        placeholder='Type a message...'
                                        value={messageText}
                                        onChange={(e) => setMessageText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && e.target.value.trim() !== '') {
                                                handleSubmitMessage(e);
                                            } else if (e.key === 'Enter') {
                                                e.preventDefault(); // Prevent sending if only whitespace
                                            }
                                        }}
                                    />
                                    <Button onClick={handleSubmitMessage} colorScheme="blue" disabled={!messageText.trim()}>
                                        <FaArrowRight />
                                    </Button>
                                </HStack>
                                {/*
                                
                                <HStack>
                                    <Text fontWeight={'bold '}>Use PGP Authentication and Confidentiality</Text>
                                    <Switch isChecked={isPGPAuthConf} onChange={(e) => setPGPAuthConf(e.target.checked)} />
                                </HStack>
                                
                                */}
                            </VStack>
                        </Box>
                    ) : <Flex justify="center" align="center" h="100%">
                        <VStack>
                            <Text fontSize={20} fontWeight="bold">
                                Select or start a new chat to message with people!
                            </Text>
                            <Image maxW={{ base: "100%", sm: "40%" }} src={sleepingCat} />
                        </VStack>
                    </Flex>}
                </Box>
            </Stack >
        </>
    );
}