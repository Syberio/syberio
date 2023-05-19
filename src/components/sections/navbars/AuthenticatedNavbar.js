import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Flex,
    HStack,
    useBreakpointValue,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    MenuDivider,
    Alert, AlertIcon, AlertTitle, AlertDescription
} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../../utils/Firebase";
import DrawerModal from "../landing_sections/DrawerModal";
import Logo from "../../ui/Logo";
import { useAuth } from "../useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

const AuthenticatedNavbar = () => {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const [userData, setUserData] = useState({ name: "", surname: "", bgColor: "" });
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        const handleUserInfo = async () => {
            const { uid } = auth.currentUser;
            const userDoc = await firestore.collection("users").doc(uid).get();

            if (userDoc.exists) {
                const { name, surname, bgColor } = userDoc.data();
                if ((name === "John" && surname === "Doe") || (name === "" && surname === "")) {
                    setShowBar(true);
                }
                else {
                    setShowBar(false);
                }
                setUserData({ name, surname, bgColor });
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
    return (
        <>

            <Box
                as="section"
                pb={{
                    base: "32",
                    md: "24",
                }}
            ></Box>
            <Box
                zIndex={999}
                position={"fixed"}
                as="section"
            >
                {showBar ? <Alert status="warning" mb={4}>
                    <AlertIcon />
                    <AlertTitle mr={2}>Registration Incomplete</AlertTitle>
                    <AlertDescription>
                        Seems like you haven't completed your registration. Please update your information at {<Button variant={"link"} colorScheme="blue" onClick={() => {
                            navigate("/dashboard/profile");
                        }} >Dashboard{">"}Profile</Button>}
                    </AlertDescription>
                </Alert> : ""}
                <Box
                    as="nav"
                    bg="bg-surface"
                    boxShadow={useColorModeValue("sm", "sm-dark")}
                    background={"#fafafa"}
                    opacity="0.9"
                    zIndex={10}
                >
                    <Container
                        maxW="-moz-fit-content"
                        py={{
                            base: "4",
                            lg: "5",
                        }}
                    >
                        <HStack spacing="80" justify="space-between">
                            <Link to="/">
                                <Logo />
                            </Link>
                            {isDesktop ? (
                                <Flex justify="space-between" flex="1">
                                    <ButtonGroup variant="ghost" spacing="12">
                                        <Button onClick={() => navigate("/dashboard")}>
                                            Dashboard
                                        </Button>
                                        <Button onClick={() => navigate("/dashboard/courses")}>
                                            Courses
                                        </Button>
                                        <Button onClick={() => navigate("/dashboard/support")}>
                                            Support
                                        </Button>
                                    </ButtonGroup>
                                    <Divider orientation="vertical"></Divider>
                                    <Container spacing="3"></Container>
                                    <Menu placement="auto">
                                        <MenuButton>
                                            <Avatar name={userData.name + " " + userData.surname} bg={userData.bgColor} color="white" />
                                        </MenuButton>
                                        <MenuList >
                                            <Text align={'center'}>Welcome, {userData.name}!</Text>
                                            <MenuDivider />
                                            <MenuItem>Settings</MenuItem>
                                            <MenuItem>Preferences</MenuItem>
                                            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            ) : (
                                <DrawerModal />
                            )}
                        </HStack>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default AuthenticatedNavbar;
