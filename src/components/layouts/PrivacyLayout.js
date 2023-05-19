import Navbar from "../sections/navbars/Navbar";
import React from "react";
import { Flex, Stack, Spinner } from "@chakra-ui/react";
import Footer from "../sections/landing_sections/Footer";
import Privacy from "../sections/terms_and_privacy/Privacy"
import { useAuth } from "../sections/useAuth";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
export default function PrivacyLayout() {
    const { isLoggedIn, authLoading } = useAuth();
    if (authLoading) {
        return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}><Spinner /> </Flex>
    }
    window.scrollTo({
        top: 0,
    });

    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar></Navbar>}
            <Privacy></Privacy>
            <Footer></Footer>
        </Flex>
    );
}