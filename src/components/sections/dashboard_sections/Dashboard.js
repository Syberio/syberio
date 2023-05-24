import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, CircularProgress, CircularProgressLabel, VStack, Card, CardBody, CardFooter, Image, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useToast, Popover, PopoverTrigger, PopoverBody, PopoverArrow, PopoverContent, PopoverHeader, PopoverCloseButton } from "@chakra-ui/react";
import { FaBell, FaHome, FaUser, FaQuestion, FaBook, FaUserLock, FaSignOutAlt, FaSearch, FaMailBulk } from "react-icons/fa";
import Logo from "../../ui/Logo";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import maninmid from "../../assets/mim-img.png"
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import sleepingCat from "../../assets/sleeping-cat.png"
import Courses from "./Courses";
import Notifications from "./Notifications";
import ManagePGPKeys from "./ManagePGPKeys";
import Profile from "./Profile";
import Support from "./Support";
import Messaging from "./Messaging";
import { useManagePGP } from "../useManagePGP";
import pkeyprivkey from "../../assets/pkey-privkey.png"
import pgpimg from "../../assets/pgp-img.png"
import encryptimg from "../../assets/encrypt-img.png"
import certimg from "../../assets/certificate-img.png"
import envelopeimg from "../../assets/envelope-img.png"


const firestore = firebase.firestore();
const auth = firebase.auth();

export default function Dashboard() {
    const [userData, setUserData] = useState({ name: "", surname: "", bgColor: "", progress: "" });
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState("Dashboard");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const toast = useToast();
    const { keyring } = useManagePGP();
    const [totalUnreadMessages, setTotalUnreadMessages] = useState(0);

    const courses = {
        "Man in Middle Attack": {
            imageSrc: maninmid,
            description: "A man-in-the-middle attack is a type of cyber attack where an attacker intercepts and alters communications between two parties who believe they are directly communicating with each other.",
            navigatePath: "/man-in-middle-attack"
        },
        "Create Public and Private Key": {
            imageSrc: pkeyprivkey,
            description: "Public key and private key are two mathematically related cryptographic keys that are used in asymmetric cryptography to secure communication by encrypting and decrypting data, where the public key is freely available to anyone while the private key is kept secret by the owner.",
            navigatePath: "/courses/create-public-private-key"
        },
        "Use PGP Services": {
            imageSrc: pgpimg,
            description: "PGP (Pretty Good Privacy) is a software encryption program that uses public-key cryptography to provide end-to-end encryption for email messages and files, allowing secure communication over insecure channels such as the internet.",
            navigatePath: "/courses/pgp-main"
        },
        "Encrypt and Check Files": {
            imageSrc: encryptimg,
            description: "Encrypting files is the process of encoding data to prevent unauthorized access, while checking files involves verifying the integrity and authenticity of the data to ensure it has not been tampered with.",
            navigatePath: "/courses/encrypt-and-check-files"
        },
        "Manage and Check X.509 Certificates": {
            imageSrc: certimg,
            description: "X.509 certificates are digital documents used to authenticate the identity of an entity in a network, and they can be managed and checked to ensure that they have not been tampered with and are still valid.",
            navigatePath: "/courses/x509"
        },
        "IPFS Principles": {
            imageSrc: envelopeimg,
            description: "InterPlanetary File System (IPFS) allows for decentralized sharing of messages by storing the message on a distributed network of nodes rather than a centralized server, and the message can be accessed by its hash value.",
            navigatePath: "/courses/ipfs"
        }
    };
    const { imageSrc, description, navigatePath } = courses[userData.lastVisitedCourse] || {};

    var isKeyPairExists = keyring.find(key => key.isPrimary);

    useEffect(() => {
        const { uid } = auth.currentUser;

        const handleUserInfo = firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                const { name, surname, bgColor, lastVisitedCourse, progress, gender, country, uid } = doc.data();
                const lastVisitedCourseProgress = progress[lastVisitedCourse] || "";
                setUserData({ name, surname, bgColor, lastVisitedCourse, lastVisitedCourseProgress, gender, country, uid });
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
                        groups[senderEmail] = 1;
                    } else {
                        groups[senderEmail]++;
                    }
                    return groups;
                }, {});

                const newTotalUnreadMessages = Object.values(unreadMessageGroups).reduce((a, b) => a + b, 0);
                setTotalUnreadMessages(newTotalUnreadMessages); // set state
            });

        return () => unsubscribe();
    }, []);


    const checkPassword = async () => {
        try {
            const user = auth.currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
                user.email,
                password
            );
            await user.reauthenticateWithCredential(credential);

            handleTabChange("Manage PGP Keys");
            navigate("/dashboard/manage-pgp-keys");
            onClose();
        } catch (error) {
            toast({
                title: 'An error occured.',
                description: "Incorrect password.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    };

    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        const tab = path.substring(path.lastIndexOf("/") + 1).toLowerCase();
        const words = tab.split("-");
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const capitalizedTab = capitalizedWords.join(" ");
        setActiveTab(capitalizedTab.replace(/Pgp/g, "PGP") || "Dashboard");
    }, [location]);
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <Flex
            h="100vh"
            px={{ base: "6", md: "5" }}
            py={{ base: "6", md: "5" }}
            flexDir={{ base: "column", md: "row" }}
            bg="gray.100"
            gap={5}
        >
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={undefined}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Manage PGP Keys
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Please enter your password to proceed.
                            <Input
                                mt={4}
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" onClick={checkPassword} ml={3}>
                                Confirm
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            {/* Sidebar */}
            <Box
                w={{ base: "full", md: "72" }}
                bg={"white"}
                color="black"
                borderRightWidth={{ md: "1px" }}
                borderRadius="20"

            >
                <Flex h="16" alignItems="center" px="16">
                    <Box cursor={'pointer'} onClick={() => {
                        navigate('/');
                    }}>
                        <Logo />
                    </Box>
                </Flex>
                <Divider variant={'solid'} borderWidth={'sm'}></Divider>
                <Box py="6" px="4">
                    <Text fontWeight="bold" textTransform="uppercase" fontSize="sm">
                        Main
                    </Text>
                    <Stack spacing="2" mt="4" mb="8">
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Dashboard") {
                                    handleTabChange("Dashboard");
                                    navigate("/dashboard");
                                }
                            }}
                            bg={activeTab === "Dashboard" ? "gray.200" : ""}
                        >
                            <FaHome />
                            <Text ml="3" fontWeight={'bold'}>Dashboard</Text>
                        </Box>
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Courses") {
                                    handleTabChange("Courses");
                                    navigate("/dashboard/courses");
                                }
                            }}
                            bg={activeTab === "Courses" ? "gray.200" : ""}


                        >
                            <FaBook />
                            <Text ml="3" fontWeight={'bold'}>Courses</Text>
                        </Box>

                    </Stack>
                    <Text fontWeight="bold" textTransform="uppercase" fontSize="sm">
                        Account
                    </Text>
                    <Stack spacing="2" mt="4" mb="8">
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Profile") {
                                    handleTabChange("Profile");
                                    navigate("/dashboard/profile");
                                }
                            }}
                            bg={activeTab === "Profile" ? "gray.200" : ""}

                        >
                            <FaUser />
                            <Text ml="3" fontWeight={'bold'}>Profile</Text>
                        </Box>
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Manage PGP Keys") {
                                    onOpen();
                                }
                            }}
                            bg={activeTab === "Manage PGP Keys" ? "gray.200" : ""}
                        >
                            <FaUserLock />
                            <Text ml="3" fontWeight={"bold"}>Manage PGP Keys</Text>
                        </Box>
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Messaging") {
                                    handleTabChange("Messaging");
                                    navigate("/dashboard/messaging");
                                }
                            }}
                            bg={activeTab === "Messaging" ? "gray.200" : ""}

                        >
                            <FaMailBulk />
                            <Text ml="3" fontWeight={'bold'}>Messaging</Text>
                        </Box>
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Notifications") {
                                    handleTabChange("Notifications");
                                    navigate("/dashboard/notifications");
                                }
                            }}
                            bg={activeTab === "Notifications" ? "gray.200" : ""}


                        >
                            <FaBell />
                            <Text ml="3" fontWeight={'bold'}>Notifications</Text>
                        </Box>
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                if (activeTab !== "Support") {
                                    handleTabChange("Support");
                                    navigate("/support");
                                }
                            }}
                            bg={activeTab === "Support" ? "gray.200" : ""}
                        >
                            <FaQuestion />
                            <Text ml="3" fontWeight={'bold'}>Support</Text>
                        </Box>
                        <Box
                            as="button"
                            display="flex"
                            alignItems="center"
                            px="3"
                            py="2"
                            rounded="md"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => {
                                handleLogout();
                                navigate('/');
                            }}

                        >
                            <FaSignOutAlt />
                            <Text ml="3" fontWeight={'bold'}>Log out</Text>

                        </Box>
                    </Stack>
                </Box>

            </Box>

            {/* Main content */}

            <Stack spacing={5} flex="1">
                <HStack justifyContent={'space-between'}>
                    <Heading size="xl">{activeTab}</Heading>
                    <Box bg="white" borderRadius="300" p="4" borderRightWidth={{ md: "1px" }} display="flex" alignItems="center">
                        <InputGroup borderRadius={20} w="100%" mr="4" ml={2}>
                            <Text>
                                You have {totalUnreadMessages} new message{totalUnreadMessages > 1 ? 's' : ''}
                            </Text>
                        </InputGroup>
                        <Popover>
                            <PopoverTrigger>
                                <Button bg={'white'}>
                                    <FaBell size={28} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader fontWeight={'bold'}>Messages</PopoverHeader>
                                <PopoverBody>
                                    You have {totalUnreadMessages} new message{totalUnreadMessages > 1 ? 's' : ''}.
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Menu placement="bottom-start">
                            <MenuButton>
                                <Avatar ml="3" name={userData.name + " " + userData.surname} bg={userData.bgColor} color="white" />
                            </MenuButton>
                            <MenuList >
                                <Text align={'center'}>Welcome, {userData.name}!</Text>
                                <MenuDivider />
                                <MenuItem onClick={() => {
                                    navigate('/dashboard/profile');
                                }}>Profile</MenuItem>
                                <MenuItem onClick={() => {
                                    handleLogout();
                                    navigate('/');
                                }}>Log Out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </HStack>
                {activeTab === "Dashboard" && <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }}>
                    <Heading size="md" mb="4">
                        Welcome back, {userData.name}!
                    </Heading>
                    <Heading size="md" mb="4">
                        <br></br><br></br>Pick Off Where You Have Left Off,
                    </Heading>
                    <HStack align={'center'} spacing="5" py={'12'}>
                        <VStack>
                            <CircularProgress value={userData.lastVisitedCourseProgress} color='green.400' size={'40'} >
                                <CircularProgressLabel fontSize={'20'}>
                                    {userData.lastVisitedCourseProgress ? userData.lastVisitedCourseProgress + "%" : "0%"}

                                </CircularProgressLabel>
                            </CircularProgress>
                            <Text>{userData.lastVisitedCourseProgress === 100 ? "Completed" : "In Progress"}</Text>
                        </VStack>
                        {userData.lastVisitedCourse && (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                borderRadius={20}
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '40%' }}
                                    src={imageSrc}
                                />
                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{userData.lastVisitedCourse}</Heading>
                                        <Text py='2'>{description}</Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate(navigatePath)
                                        }}>
                                            Go to Course
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        )}

                    </HStack>
                </Box>}
                {activeTab === "Courses" && <Courses />}
                {activeTab === "Profile" && <Profile userData={userData} />}
                {activeTab === "Manage PGP Keys" && <ManagePGPKeys />}
                {activeTab === "Notifications" && <Notifications />}
                {activeTab === "Support" && <Support />}
                {activeTab === "Messaging" ? (isKeyPairExists ? <Messaging /> :
                    <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }}>

                        <Flex justify="center" align="center" h="100%">
                            <VStack>
                                <Text fontSize={20} fontWeight="bold">
                                    You need to create key pairs to use this feature.
                                </Text>
                                <Image maxW={{ base: "100%", sm: "40%" }} src={sleepingCat} />
                            </VStack>
                        </Flex>
                    </Box>
                ) : null}

            </Stack>

        </Flex>
    );
}
