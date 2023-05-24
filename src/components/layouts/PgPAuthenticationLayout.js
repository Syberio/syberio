import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../sections/landing_sections/Footer";
import PgPAuthentication from "../sections/courses/PgPAuthentication";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
export default function PgPAuthenticationLayout() {
    return (

        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><PgPAuthentication></PgPAuthentication></></>

    );
}
