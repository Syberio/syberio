import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, CircularProgress, CircularProgressLabel, VStack, Card, CardBody, CardFooter, Image, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useToast, Table, Thead, Tbody, Tr, Th, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Checkbox, Select, FormErrorMessage } from "@chakra-ui/react";
import { FaBell, FaHome, FaUser, FaQuestion, FaBook, FaUserLock, FaSignOutAlt, FaSearch, FaMailBulk } from "react-icons/fa";
import Logo from "../ui/Logo";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { useAuth } from "./useAuth";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import countries from '../../utils/countries.json';
import genders from '../../utils/genders.json';


const firestore = firebase.firestore();
const auth = firebase.auth();

export default function AdminPanel() {
    const [userData, setUserData] = useState({ name: "", surname: "", bgColor: "", progress: "" });
    const [password, setPassword] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleLogout, currentUser } = useAuth();
    const toast = useToast();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onClose: onEditModalClose } = useDisclosure();
    const [selectedUserToDelete, setSelectedUserToDelete] = useState(null);
    const { isOpen: isDeleteOpen, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const { isOpen: isReplyOpen, onOpen: onReplyOpen, onClose: onReplyClose } = useDisclosure();
    const [replyTitle, setReplyTitle] = useState("");
    const [replyMessage, setReplyMessage] = useState("");


    useEffect(() => {
        const fetchTickets = async () => {
            const ticketsCollection = firestore.collection('tickets');
            ticketsCollection.onSnapshot((snapshot) => {
                const updatedTickets = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setTickets(updatedTickets);
            });
        };

        fetchTickets();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const usersCollection = firestore.collection('users')
                .where('isVerified', '==', true)

            usersCollection.onSnapshot((snapshot) => {
                const updatedUsers = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setUsers(updatedUsers);
            });
        };

        fetchData();
    }, []);

    useEffect(() => {
        const { uid } = auth.currentUser;

        const handleUserInfo = firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                const { name, surname, bgColor, progress, gender, country, uid } = doc.data();
                setUserData({ name, surname, bgColor, progress, gender, country, uid });
            } else {
                console.log("User document doesn't exist!");
            }
        }, (error) => console.log("Error fetching user data: ", error));

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                console.log("User not logged in");
            }
        });

        return () => {
            handleUserInfo();
            unsubscribe();
        };
    }, []);

    const handleUserSelect = (userId, checked) => {
        if (checked) {
            setSelectedUsers(prevUsers => [...prevUsers, userId]);
        } else {
            setSelectedUsers(prevUsers => prevUsers.filter(id => id !== userId));
        }
    };

    async function handleEdit(userId) {
        const doc = await firestore.collection('users').doc(userId).get();
        if (doc.exists) {
            setSelectedUser({ ...doc.data(), id: doc.id });
            onEditModalOpen();
        } else {
            console.log('No such user!');
        }
    }

    async function handleDelete() {
        if (selectedUserToDelete) {
            await firestore.collection('users').doc(selectedUserToDelete.id).delete();
            onCloseDelete();
            toast({
                title: 'Success.',
                description: "User successfully deleted.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
    }
    async function handleUpdateUser() {
        if (selectedUser) {
            await firestore.collection('users').doc(selectedUser.id).update(selectedUser);
            onEditModalClose();
            toast({
                title: 'Success.',
                description: "User information successfully updated.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    const handleReply = (ticketId) => {
        const ticket = tickets.find(ticket => ticket.id === ticketId);
        setSelectedTicket(ticket);
        onReplyOpen();
    };

    const handleSendReply = async () => {
        if (selectedTicket) {
            // Find the user's document based on their email
            const userSnapshot = await firestore.collection("users").where("email", "==", selectedTicket.email).get();

            if (!userSnapshot.empty) {
                const user = userSnapshot.docs[0];

                // Send the reply
                await firestore
                    .collection("users")
                    .doc(user.id) // Use the ID of the first matching user document
                    .collection("notifications")
                    .add({
                        title: replyTitle,
                        message: replyMessage,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    });

                setReplyTitle("");
                setReplyMessage("");
                onReplyClose();
            } else {
                console.log("No user with that email found!");
            }
        }
    };


    return (
        <Flex
            h="100vh"
            w="100%"
            px={{ base: "6", md: "5" }}
            py={{ base: "6", md: "5" }}
            flexDir={{ base: "column", md: "row" }}
            bg="gray.100"
            gap={5}
            overflow={'scroll'}
        >
            <AlertDialog
                isOpen={isDeleteOpen}
                leastDestructiveRef={undefined}
                onClose={onCloseDelete}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete User
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure you want to delete this user? This operation is irreversible.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button onClick={onCloseDelete}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={handleDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <Modal isOpen={isEditModalOpen} onClose={onEditModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {selectedUser && (
                            <>
                                <FormControl isInvalid={selectedUser.email === ''}>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder="Email" value={selectedUser.email} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
                                    <FormErrorMessage>Email is required</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={selectedUser.name === ''}>
                                    <FormLabel>Name</FormLabel>
                                    <Input placeholder="Name" value={selectedUser.name} onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })} />
                                    <FormErrorMessage>Name is required</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={selectedUser.surname === ''}>
                                    <FormLabel>Surname</FormLabel>
                                    <Input placeholder="Surname" value={selectedUser.surname} onChange={(e) => setSelectedUser({ ...selectedUser, surname: e.target.value })} />
                                    <FormErrorMessage>Surname is required</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        value={selectedUser.country}
                                        onChange={(e) => setSelectedUser({ ...selectedUser, country: e.target.value })}
                                        size="md"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                    <Select
                                        value={selectedUser.gender}
                                        onChange={(e) => setSelectedUser({ ...selectedUser, gender: e.target.value })}
                                        size="md"
                                    >
                                        {genders.map((gender, index) => (
                                            <option key={index} value={gender.name}>
                                                {gender.name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                                {/* Add more form controls as needed */}
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onEditModalClose}>Cancel</Button>
                        <Button
                            colorScheme="blue"
                            onClick={handleUpdateUser}
                            ml={3}
                            isDisabled={selectedUser?.email === '' || selectedUser?.name === '' || selectedUser?.surname === '' || selectedUser?.country === '' || selectedUser?.gender === ''}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={isReplyOpen} onClose={onReplyClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Reply to {selectedTicket?.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isInvalid={replyTitle === ''}>
                            <FormLabel>Title</FormLabel>
                            <Input
                                placeholder="Reply title"
                                value={replyTitle}
                                onChange={(e) => setReplyTitle(e.target.value)}
                            />
                            <FormErrorMessage>Title is required</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={replyMessage === ''}>
                            <FormLabel>Message</FormLabel>
                            <Input
                                placeholder="Reply message"
                                value={replyMessage}
                                onChange={(e) => setReplyMessage(e.target.value)}
                            />
                            <FormErrorMessage>Message is required</FormErrorMessage>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onReplyClose}>Cancel</Button>
                        <Button colorScheme="blue" onClick={handleSendReply} isDisabled={replyTitle === '' || replyMessage === ''} ml={3} >Send Reply</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* Main content */}
            <Stack spacing={5} flex="1">
                <HStack justifyContent={'space-between'}>
                    <Heading size="xl">Admin Panel</Heading>
                    <Menu placement="bottom-start">
                        <MenuButton>
                            <Avatar ml="3" name={userData.name + " " + userData.surname} bg={userData.bgColor} color="white" />
                        </MenuButton>
                        <MenuList >
                            <Text align={'center'}>Welcome, {userData.name}!</Text>
                            <MenuDivider />
                            <MenuItem onClick={() => {
                                handleLogout();
                            }}>Log Out</MenuItem>
                        </MenuList>
                    </Menu>

                </HStack>
                <Heading alignSelf={'center'} size="md" mb="4">
                    Welcome Admin, {userData.name}!
                </Heading>
                <Stack direction={'row'} spacing={5}>
                    <Box flex="1" bg="gray.200" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} width={"50%"} overflow={'scroll'}>
                        <Heading size="md" mb="4">
                            User List
                        </Heading>
                        <HStack spacing={12}>
                            <Input
                                bg={'gray.100'}
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </HStack>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Email</Th>
                                    <Th>Edit</Th>
                                    <Th>Delete</Th>
                                    <Th>Select</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users
                                    .filter(user => user.email.includes(searchTerm))
                                    .map(filteredUser => (
                                        filteredUser.email &&
                                        <Tr key={filteredUser.id}>
                                            <Td>{filteredUser.email}</Td>
                                            <Td><Button colorScheme="blue" onClick={() => handleEdit(filteredUser.id)}>Edit</Button></Td>
                                            <Td>
                                                <Button colorScheme="red" onClick={() => { setSelectedUserToDelete(filteredUser); onOpenDelete(); }}>
                                                    Delete
                                                </Button>
                                            </Td>
                                            <Td>
                                                <Checkbox
                                                    bg={'#fafafa'}
                                                    isChecked={selectedUsers.includes(filteredUser.id)}
                                                    onChange={(e) => handleUserSelect(filteredUser.id, e.target.checked)}
                                                />
                                            </Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    </Box>
                    <Box flex="1" bg="gray.200" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow={'scroll'} width={"50%"}>
                        <Heading size="md" mb="4">
                            Send Notifications to Users
                        </Heading>
                        <VStack spacing={5}>
                            <Input
                                bg={'gray.100'}
                                placeholder="Notification title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                                bg={'gray.100'}
                                placeholder="Notification message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <HStack>
                                <Button colorScheme="blue" isDisabled={title === '' || message === ''} onClick={() => {
                                    firestore.collection("users").get().then((querySnapshot) => {
                                        querySnapshot.forEach((doc) => {
                                            firestore
                                                .collection("users")
                                                .doc(doc.id)
                                                .collection("notifications")
                                                .add({
                                                    title: title,
                                                    message: message,
                                                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                });
                                        });
                                        setTitle("");
                                        setMessage("");
                                        setSelectedUsers([]);
                                    });
                                }}>Send message to all users</Button>
                                <Button colorScheme="blue" isDisabled={selectedUsers <= 0 || title === '' || message === ''} onClick={() => {
                                    selectedUsers.forEach(userId => {
                                        firestore
                                            .collection("users")
                                            .doc(userId)
                                            .collection("notifications")
                                            .add({
                                                title: title,
                                                message: message,
                                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                            });
                                    });
                                    setTitle("");
                                    setMessage("");
                                    setSelectedUsers([]);
                                }}>Send message to selected users</Button>
                            </HStack>

                        </VStack>
                    </Box>
                </Stack>
                <Box flex="1" bg="gray.200" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} width={"100%"}>
                    <Heading as="h2" size="md" mb={6}>Support Tickets</Heading>
                    {tickets.map((ticket, index) => (
                        <Box key={index} p={3} border="1px" borderColor="gray.200" borderRadius="md" mb={3}>
                            <Text><strong>Email:</strong> {ticket.email}</Text>
                            <Text><strong>Title:</strong> {ticket.title}</Text>
                            <Text><strong>Problem:</strong> {ticket.problem}</Text>
                            <Text><strong>Message:</strong> {ticket.message}</Text>
                            <Button colorScheme="blue" onClick={() => handleReply(ticket.id)}>Reply</Button>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Flex>
    );
}
