import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import Support from "../sections/dashboard_sections/Support";
import Footer from "../sections/landing_sections/Footer";
import { useAuth } from "../sections/useAuth";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import Navbar from "../sections/navbars/Navbar";
export default function SupportLayout() {
    const { isLoggedIn, authLoading } = useAuth();
    if (authLoading) {
        return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}><Spinner /> </Flex>
    }
    window.scrollTo({
        top: 0,
    });
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'} >
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar></Navbar>}
            <Support></Support>
            <Footer></Footer>
        </Flex>
    );
}