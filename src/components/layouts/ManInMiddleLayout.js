import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import Navbar from "../sections/navbars/Navbar";
import Footer from "../sections/landing_sections/Footer";
import ManInMiddle from "../sections/courses/ManInMiddle";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import { useAuth } from "../sections/useAuth";
export default function ManInMiddleLayout() {
    const { isLoggedIn, authLoading } = useAuth();
    if (authLoading) {
        return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}><Spinner /> </Flex>
    }

    return (
        <><><Flex align={'center'} direction='column' >
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar></Navbar>}
        </Flex><ManInMiddle></ManInMiddle></></>

    );
}
