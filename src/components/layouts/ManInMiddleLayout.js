import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "../sections/navbars/Navbar";
import Footer from "../sections/landing_sections/Footer";
import ManInMiddle from "../sections/courses/ManInMiddle";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import { useAuth } from "../sections/useAuth";
export default function ManInMiddleLayout() {
    const { isLoggedIn} = useAuth();

    return (

        <><><Flex align={'center'} direction='column' >
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar></Navbar>}
        </Flex><ManInMiddle></ManInMiddle></><Footer></Footer></>

    );
}
