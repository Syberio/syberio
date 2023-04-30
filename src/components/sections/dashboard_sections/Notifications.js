import React, { useState } from "react";
import { Box, Flex, Text, Button, Table, Thead, Tr, Th, Tbody, Td, Modal, ModalBody, ModalFooter, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, Image, VStack, Spinner } from "@chakra-ui/react";

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../../utils/Firebase";
import { useNotifications } from "../useNotifications";
import { useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import sleepingCat from "../../assets/sleeping-cat.png"

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export default function Notifications() {
    const { notifications, deleteNotification, loading } = useNotifications();
    const [currentNotification, setCurrentNotification] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    function handleDelete(notification) {
        deleteNotification(notification.id);
        toast({
            title: 'Success!',
            description: "Message deleted successfully!",
            status: 'success',
            duration: 3500,
            isClosable: true,
        })
        onClose();
    }
    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow="scroll">
            {notifications.length === 0 && loading ? (
                <Flex justify="center" align="center" h="100%">
                    <Spinner size="xl" />
                </Flex>
            ) : notifications.length === 0 ? (
                <Flex justify="center" align="center" h="100%">
                    <VStack>
                        <Text fontSize={20} fontWeight="bold">
                            You currently have no messages.
                        </Text>
                        <Image maxW={{ base: "100%", sm: "40%" }} src={sleepingCat} />
                    </VStack>

                </Flex>
            ) : (
                // render the notifications

                <Table display={notifications.length <= 0 ? "none" : ""} variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Message</Th>
                            <Th>Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {notifications.map((notification) => (
                            <Tr key={notification.id}>
                                <Td>{notification.title ?? "null"}</Td>
                                <Td>{notification.message ?? "null"}</Td>
                                <Td>{notification.createdAt ? notification.createdAt.toDate().toLocaleDateString() : "null"}</Td>
                                <Td>
                                    <Button size="sm" colorScheme="red" onClick={() => {
                                        setCurrentNotification(notification);
                                        onOpen();
                                    }}>
                                        Delete
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Your Operation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to delete this message?
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme={'green'} onClick={() => handleDelete(currentNotification)}>
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Button onClick={() => {
                firestore.collection("users").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        firestore
                            .collection("users")
                            .doc(doc.id)
                            .collection("notifications")
                            .add({
                                title: "For everyone",
                                message: "Babayız",
                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                            });
                    });
                });
            }}>Send message to all users</Button>
            <Button onClick={() => {
                firestore
                    .collection("users")
                    .doc(auth.currentUser.uid)
                    .collection("notifications")
                    .add({
                        title: "For the user",
                        message: "Babayım",
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    })
            }}>Send message to current user</Button>
        </Box>
    );
}