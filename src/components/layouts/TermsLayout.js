import Navbar from "../sections/navbars/Navbar";
import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import Footer from "../sections/landing_sections/Footer";
import Terms from "../sections/terms_and_privacy/Terms"
import { useAuth } from "../sections/useAuth";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
export default function TermsLayout(props) {
    const { isLoggedIn} = useAuth();
    window.scrollTo({
        top: 0,
      });

    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar />}
            <Terms />
            <Footer />
        </Flex>

    );
}