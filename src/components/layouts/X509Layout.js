import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../sections/landing_sections/Footer";
import X509 from "../sections/courses/X509";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";

export default function X509Layout() {
    return (
        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><X509></X509></><Footer></Footer></>
    );
}