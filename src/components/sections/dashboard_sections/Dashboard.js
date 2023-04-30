import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, CircularProgress, CircularProgressLabel, VStack, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { FaBell, FaHome, FaUser, FaQuestion, FaBook, FaUserLock, FaSignOutAlt, FaSearch } from "react-icons/fa";
import Logo from "../../ui/Logo";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../../utils/Firebase";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import maninmid from "../../assets/mim-img.png"
import { useLocation } from "react-router-dom";


import Courses from "./Courses";
import Notifications from "./Notifications";
import ManagePGPKeys from "./ManagePGPKeys";
import Profile from "./Profile";
import Support from "./Support";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export default function Dashboard() {
    /*TODO: Actually implement this */
    const [userData, setUserData] = useState({ name: "", surname: "", bgColor: "", progress: "" });
    const [activeTab, setActiveTab] = useState("Dashboard");
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const handleUserInfo = async () => {
            const { uid } = auth.currentUser;
            const userDoc = await firestore.collection("users").doc(uid).get();

            if (userDoc.exists) {
                const { name, surname, bgColor, progress, gender, country } = userDoc.data();
                setUserData({ name, surname, bgColor, progress });
            } else {
                console.log("User document doesn't exist!");
            }
        };

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                handleUserInfo();
            } else {
                console.log("User not logged in");
            }
        });

        return () => unsubscribe();
    }, []);
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
                                    handleTabChange("Manage PGP Keys");
                                    navigate("/dashboard/manage-pgp-keys");
                                }
                            }}
                            bg={activeTab === "Manage PGP Keys" ? "gray.200" : ""}


                        >
                            <FaUserLock />
                            <Text ml="3" fontWeight={'bold'}>Manage PGP Keys</Text>
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
                                    navigate("/dashboard/support");
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
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaSearch color="gray.300" />}
                            />
                            <Input borderRadius={20} type="search" placeholder="Search..." />
                        </InputGroup>
                        <FaBell />
                        <Menu placement="bottom-start">
                            <MenuButton>
                                <Avatar ml="3" name={userData.name + " " + userData.surname} bg={userData.bgColor} color="white" />
                            </MenuButton>
                            <MenuList >
                                <Text align={'center'}>Welcome, {userData.name}!</Text>
                                <MenuDivider />
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Preferences</MenuItem>
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
                            <CircularProgress value={userData.progress * 20} color='green.400' size={'40'} >
                                <CircularProgressLabel fontSize={'20'}>
                                    {userData.progress * 20 + "%"}

                                </CircularProgressLabel>
                            </CircularProgress>
                            <Text>{userData.progress * 20 === 100 ? "Completed" : "In Progress"}</Text>
                        </VStack>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            borderRadius={20}
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '40%' }}
                                src={maninmid}
                            />
                            <Stack>
                                <CardBody>
                                    <Heading size='md'>Man in Middle Attack</Heading>
                                    <Text py='2'>
                                        A man-in-the-middle attack is a type of cyber attack where an attacker intercepts and alters communications between two parties who believe they are directly communicating with each other.
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue' onClick={() => {
                                        navigate("/man-in-middle-attack")
                                    }}>
                                        Go to Course
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </HStack>
                </Box>}
                {activeTab === "Courses" && <Courses />}
                {activeTab === "Profile" && <Profile userData={userData} />}
                {activeTab === "Manage PGP Keys" && <ManagePGPKeys />}
                {activeTab === "Notifications" && <Notifications />}
                {activeTab === "Support" && <Support />}
            </Stack>

        </Flex>
    );
}
