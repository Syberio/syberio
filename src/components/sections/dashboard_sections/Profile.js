import { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFunctions, httpsCallable } from 'firebase/functions';
import 'firebase/compat/functions';
import WaveBackground from "../../../utils/WaveBackground";
import { EmailAuthProvider } from "firebase/auth";


import {
    Box,
    Flex,
    Heading,
    IconButton,
    Stack,
    Text,
    Button,
    Divider,
    Avatar,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    VStack,
    FormControl,
    FormLabel,
    Switch,
    Select,
    Spinner,
    FormErrorMessage,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import languages from '../../../utils/languages.json';
import genders from '../../../utils/genders.json';
import countries from '../../../utils/countries.json';
import { useToast } from "@chakra-ui/react";


const firestore = firebase.firestore();
const auth = firebase.auth();

export default function Profile() {
    const { uid } = auth.currentUser;
    const userRef = firestore.collection("users").doc(uid);
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const toast = useToast();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [currentPasswordError, setCurrentPasswordError] = useState('');


    const colorOptions = [
        "gray.300",
        "red.200",
        "green.200",
        "blue.200",
        "purple.200",
    ];

    useEffect(() => {
        userRef.get().then((doc) => {
            if (doc.exists) {
                setUserData(doc.data());
                setLoading(false);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    const handleColorChange = (color) => {
        setUserData(prevState => ({ ...prevState, bgColor: color }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    };

    const toggleEditMode = () => {
        if (editMode) {
            userRef.update(userData).then(() => {
                toast({
                    title: "Success.",
                    description: "Successfully updated profile.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }).catch((error) => {
                console.error("Error updating document: ", error);
            });
        }
        setEditMode(!editMode);
    };

    const handlePasswordChange = () => {
        if (newPassword === '' || confirmPassword === '' || currentPassword === '') {
            if (newPassword === '') setPasswordError('New password field cannot be empty');
            if (confirmPassword === '') setConfirmPasswordError('Confirm password field cannot be empty');
            if (currentPassword === '') setCurrentPasswordError('Current password field cannot be empty');
            return;
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }
        if (newPassword !== confirmPassword) {
            toast({
                title: "Error.",
                description: "Passwords do not match.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            var user = auth.currentUser;
            var credential = EmailAuthProvider.credential(user.email, currentPassword);

            // Prompt the user to re-provide their sign-in credentials
            user.reauthenticateWithCredential(credential).then(() => {
                user.updatePassword(newPassword)
                    .then(() => {
                        toast({
                            title: "Success.",
                            description: "Password has been changed successfully.",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });
                        setNewPassword('');
                        setConfirmPassword('');
                        setCurrentPassword('');
                    })
                    .catch((error) => {
                        toast({
                            title: "Error",
                            description: error.message,
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                        });
                    });
            }).catch((error) => {
                // An error occurred
                if (error.code === "auth/weak-password") {
                    toast({
                        title: "An error occured.",
                        description: "Password is too short.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                }
                else if (error.code === "auth/wrong-password") {
                    toast({
                        title: "An error occured.",
                        description: "Current password is incorrect.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                }
                else {
                    toast({
                        title: "Error",
                        description: error.message,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                }
            });
        }
    };
    const handlePasswordInput = (e) => {
        const { name, value } = e.target;

        if (name === 'newPassword') {
            setPasswordError('');
            setNewPassword(value);
        }

        if (name === 'confirmPassword') {
            setConfirmPasswordError('');
            setConfirmPassword(value);
        }

        if (name === 'currentPassword') {
            setCurrentPasswordError('');
            setCurrentPassword(value);
        }
    }


    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }}>
            {loading ? (
                <Flex justify="center" align="center" h="100%">
                    <Spinner size="xl" />
                </Flex>
            ) : (
                <><HStack justifyContent="end">
                    <IconButton
                        icon={editMode ? <CheckIcon /> : <EditIcon />}
                        onClick={toggleEditMode}
                        colorScheme={editMode ? "green" : "blue"}
                        variant="outline"
                        isRound />
                </HStack>
                    <VStack spacing={5} alignItems="start" pl={100} pt={50}>
                        <HStack spacing={5}>

                            <VStack>
                                <Avatar size="2xl" name={userData.name + " " + userData.surname} bg={userData.bgColor} color="white" />
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    {editMode ? (
                                        <Box
                                            display={'flex'}
                                            flexDirection={'row'}
                                            bg="white"
                                            boxShadow="md"
                                            p="2"
                                            borderRadius="md"
                                        >
                                            {colorOptions.map((color) => (
                                                <Box
                                                    key={color}
                                                    w="20px"
                                                    h="20px"
                                                    bg={color}
                                                    borderRadius="full"
                                                    cursor="pointer"
                                                    onClick={() => handleColorChange(color)}
                                                    mx="1"
                                                    my="2"
                                                />
                                            ))}
                                        </Box>
                                    ) : ('')}
                                </Box>
                            </VStack>
                            <VStack spacing={2} alignItems="start">
                                {editMode ? (
                                    <>
                                        <Text fontSize="xl" fontWeight="bold">
                                            Name
                                        </Text>
                                        <Input type="text" value={userData.name} id="name" name="name" onChange={handleChange} />
                                        <Text fontSize="xl" fontWeight="bold">
                                            Surname
                                        </Text>
                                        <Input type="text" value={userData.surname} id="surname" name="surname" onChange={handleChange} />
                                    </>
                                ) : (
                                    <Text fontSize="2xl" fontWeight="bold">
                                        {userData.name + " " + userData.surname}
                                    </Text>
                                )}
                                <FormControl>
                                    <FormLabel htmlFor="countries" fontWeight={'bold'}></FormLabel>
                                    {editMode ? (
                                        <><Text fontSize="xl" fontWeight="bold">
                                            Country
                                        </Text><Select
                                            placeholder="Select"
                                            value={userData.country}
                                            onChange={handleChange}
                                            size="md"
                                            name="country"
                                        >
                                                {countries.map((country, index) => (
                                                    <option key={index} value={country.name}>
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </Select></>) : (
                                        <Text fontSize="md" color="gray.500">
                                            {userData.country}
                                        </Text>
                                    )}
                                </FormControl>
                            </VStack>
                            <Stack direction={'column'} >
                                {editMode ? (
                                    <><FormControl isInvalid={!!currentPasswordError}>
                                        <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
                                        <Input
                                            type="password"
                                            value={currentPassword}
                                            id="currentPassword"
                                            name="currentPassword"
                                            onChange={handlePasswordInput}
                                        />
                                        <FormErrorMessage>{currentPasswordError}</FormErrorMessage>
                                    </FormControl>

                                        <FormControl isInvalid={!!passwordError}>
                                            <FormLabel htmlFor="newPassword">New Password</FormLabel>
                                            <Input
                                                type="password"
                                                value={newPassword}
                                                id="newPassword"
                                                name="newPassword"
                                                onChange={handlePasswordInput}
                                            />
                                            <FormErrorMessage>{passwordError}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl isInvalid={!!confirmPasswordError}>
                                            <FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
                                            <Input
                                                type="password"
                                                value={confirmPassword}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                onChange={handlePasswordInput}
                                            />
                                            <FormErrorMessage>{confirmPasswordError}</FormErrorMessage>
                                        </FormControl>
                                        <Button colorScheme="blue" onClick={handlePasswordChange}>Change Password</Button></>) : (
                                    ''
                                )}
                            </Stack>
                        </HStack>
                        <Stack direction={{ base: "column", md: "row" }} spacing={8} width="full">
                            <Stack spacing={40} direction={{ base: "column", md: "row" }}>
                                <FormControl>
                                    <FormLabel htmlFor="gender" fontSize={editMode ? '2xl' : ''} fontWeight={'bold'}>Gender</FormLabel>
                                    {editMode ? (
                                        <Select
                                            placeholder="Select"
                                            value={userData.gender}
                                            onChange={handleChange}
                                            size="md"
                                            name="gender"
                                        >
                                            {genders.map((gender, index) => (
                                                <option key={index} value={gender.name}>
                                                    {gender.name}
                                                </option>
                                            ))}
                                        </Select>) : (
                                        <Text>{userData.gender}</Text>
                                    )}
                                </FormControl>
                                <Stack direction={'column'}>
                                    <FormLabel htmlFor="email" fontWeight={'bold'}>Email</FormLabel>
                                    <Text fontWeight="bold">{userData.email}</Text>
                                </Stack>
                                {!editMode ? <Text fontWeight="bold">Enable Edit Mode to change password.</Text> : ''}
                            </Stack>
                        </Stack>
                    </VStack></>
            )}
        </Box>
    );
}
