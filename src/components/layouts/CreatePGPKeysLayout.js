import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../sections/navbars/Navbar";
import Footer from "../sections/landing_sections/Footer";
import PGPKeys from "../sections/courses/PGPKeys";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import { useAuth } from "../sections/useAuth";
export default function CreatePGPKeysLayout() {
    const { isLoggedIn, authLoading } = useAuth();
    if (authLoading) {
        return null; // or return a loading spinner
    }

    return (
        <><><Flex background={'#fafafa'} align={'center'} direction='column'  >
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar></Navbar>}

        </Flex><PGPKeys></PGPKeys></></>
    );
}
