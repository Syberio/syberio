import React from "react";
import { Flex, Stack,Spinner } from "@chakra-ui/react";
import Navbar from "../sections/navbars/Navbar";
import Footer from "../sections/landing_sections/Footer";
import ModalCard from "../sections/landing_sections/ModalCard";
import Roadmap from "../sections/landing_sections/Roadmap";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import { useAuth } from "../sections/useAuth";

export default function LandingLayout(props) {
    const { isLoggedIn,authLoading } = useAuth();
    if (authLoading) {
        return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}><Spinner /> </Flex>
    }

    return (
        <Flex
            background={'#fafafa'}
            direction="column"
            align="center"
            {...props}
        >
            {isLoggedIn ? <AuthenticatedNavbar /> : <Navbar></Navbar>}
            {props.children}
            <Stack align={'center'}>
                <ModalCard></ModalCard>
                <Roadmap></Roadmap>
            </Stack>
            <Footer></Footer>
        </Flex>

    );
}
