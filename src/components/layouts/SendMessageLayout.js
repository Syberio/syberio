import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../sections/landing_sections/Footer";
import SendMessage from "../sections/courses/SendMessage";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";

export default function SendMessageLayout() {
    return (
        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><SendMessage></SendMessage></><Footer></Footer></>
    );
}